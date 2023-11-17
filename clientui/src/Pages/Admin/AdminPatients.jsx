import React, { useContext, useEffect, useState } from "react";
import AdminDash from './AdminDash'
import {  Button} from 'react-bootstrap'
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Divider from "../../Components/Divider";
import { Form, Input, message ,DatePicker} from "antd";
import { Link, useNavigate } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";
import Combobox from "react-widgets/Combobox";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { Select,  Avatar, Badge } from "antd";
import { SaveOutlined } from "@ant-design/icons";
import Resizer from "react-image-file-resizer";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';


const AdminPatients = () => {
  const options = ["Male", "Female", "Other"];
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
    const [values, setValues] = useState({
      name: '',
      description: '',
      price: '1000',
      uploading: false,
      paid: true,
      category: '',
      loading: false,
   });
    const [show, setShow] = useState(false);
    const [preview, setPreview] = useState('');
    const [uploadButtonText, setUploadButtonText] = useState('Upload Image');
   
    const [isEdit, setIsEdit] = useState(false)
    const [editPatient ,setEditPatient] = useState({})
    const handleClose = () => {
      setShow(false)
      setIsEdit(false)
    }
    const handleShow = () => setShow(true);
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);
    const [patientsArray, setPatientsArray] = useState([]);
    const [image, setImage] = useState({});
    const getPatients = async () => {
      try {
        let { data } = await axios.get("http://localhost:8000/patients");
        setPatientsArray(data);
      } catch (err) {
        console.log("Error", err);
      }
    };
    useEffect(() => {
      getPatients();
    }, []);
    const getPatient = async (id) => {
      setLoading(true)
      try {
        const {data} = await axios.get(`http://localhost:8000/patient/${id}`);
        setEditPatient(data)
        
        setLoading(false)
      } catch (error) {
        setLoading(false)
      }
    }
  
    const handleEdit = (id) => {
      handleShow()
      setIsEdit(true)
      getPatient(id)
      console.log(editPatient)
    }
    
    
  
    
    async function submit(e) {
      e.preventDefault();
  
      // console.log(formData);
      try {
        setLoading(true);
        
        console.log(formData.DateOfBirth);
        const {data} = await axios.post("http://localhost:8000/patient/add", {
         
      
        firstname: formData.firstname,
          lastname: formData.lastname,
          dateofbirth: formData.dateofbirth,
          gender: formData.gender,
  
          contactdetails: formData.contactdetails,
          
          
          
          
          
        });
  
        toast.success("Patient Added Successfully ....");
        setPatientsArray([...patientsArray, data])
        setLoading(false);
        handleClose()
  
        // console.log("SIGNUP RESPONSE: ", data);
      } catch (err) {
        toast.error(err.response.data);
        setLoading(false);
      }
    }
    const editData = async () => {
      try {
        const {data} = await axios.put(`http://localhost:8000/patient/${editPatient?._id}`, formData );
        getPatients()
        handleClose()
  
      } catch (error) {}
    }
    const delPatient = async(id) => {
      try {
        const data = await axios.delete(`http://localhost:8000/patients/${id}`)
        getPatients()

      } catch (error) {
        
      }
    }
  return (
    <div>
       <div className="relative bg-neutral-white w-full h-[1024px] overflow-hidden text-left text-sm text-neutral-gray-dark font-h5-bold-20-26-02px">
     
      <AdminDash/>
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{isEdit ? "Edit" : "Add"} Patient</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className=" bg-primary flex justify-center items-center">
            <div className="bg-white p-4 rounded w-[475px]">
              <h1 className="text-primary py-4 text-center text-2xl">
                <span className="text-orange-500 text-2xl">
                  {" "}
                  {isEdit ? "Edit" : "Add New"} Patient
                </span>
              </h1>
              <Divider />

              {loading ? "Loading..." : (
                <Form layout="Horizontal">
                <Form.Item label="First Name" name="FirstName">
                  <Input
                    placeholder="FirstName"
                    value={formData.firstname}
                    defaultValue={isEdit ? editPatient?.firstname : ""}
                    onChange={(e) =>
                      setFormData({ ...formData, firstname: e.target.value })
                    }
                  />
                </Form.Item>
                <Form.Item label="Last Name" name="LastName">
                  <Input
                    placeholder="LastName"
                    value={formData.lastname}
                    defaultValue={isEdit ? editPatient?.lastname : ""}
                    onChange={(e) =>
                      setFormData({ ...formData, lastname: e.target.value })
                    }
                  />
                </Form.Item>
                <Form.Item label="Date Of Birth" name="Date Of Birth">
                  <Input
                    placeholder="yyyy/mm/dd"
                    value={formData.dateofbirth}
                    
                    defaultValue={isEdit ? editPatient?.dateofbirth : ""}
                    onChange={(e) =>
                      setFormData({ ...formData, dateofbirth: e.target.value })
                    }
                  />
                </Form.Item>
                <Form.Item label="Gender" name="Gender">
                  <Dropdown
                    options={options}
                    value={ formData.gender}
                    placeholder="Select an option"
                    // defaultValue={isEdit ? editProduct?.category : ""}

                    onChange={(e) =>
                      setFormData({ ...formData, gender: e.value })
                    }
                  />
                </Form.Item>
                <Form.Item label="Contact Details" name="Contact Details">
                  <Input
                    placeholder="Contact Details"
                    value={formData.contactdetails}
                    defaultValue={isEdit ? editPatient?.contactdetails : ""}
                    onChange={(e) =>
                      setFormData({ ...formData, contactdetails: e.target.value })
                    }
                  />
                </Form.Item>
                

                
              </Form>
            


              )}
              
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            type="primary"
            htmlType="submit"
            block
            className="mt-3"
          onClick={isEdit ? editData : submit}
       
          >
            {loading ? <SyncOutlined spin /> : "Save"}{" "}
          </Button>
        </Modal.Footer>
      </Modal>









      <div className="absolute w-[calc(100%_-_305px)] top-[115px] right-[0px] left-[305px] h-[505px] text-neutral-black">
      
        <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px]">
         
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-lg bg-neutral-white shadow-[0px_12px_26px_rgba(16,_30,_115,_0.06)]" />
        </div>
        <b className="absolute w-[calc(100%_-_48px)] top-[24px] left-[24px] text-xl tracking-[0.2px] leading-[26px] inline-block">
          Patients
        </b>
        <TableContainer className="absolute w-[calc(100%_-_48px)] top-[86px] left-[0px] tracking-[0.1px] leading-[20px]" component={Paper}>
      <Table sx={{ minWidth: 600 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell >Date Of Birth</StyledTableCell>
            <StyledTableCell >Gender</StyledTableCell>
            <StyledTableCell >Contact Details</StyledTableCell>
            <StyledTableCell >Edit</StyledTableCell>
            <StyledTableCell >Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {patientsArray.map((patient) => (
            <StyledTableRow >
             <StyledTableCell >{patient.firstname +" "+ patient.lastname}</StyledTableCell>
              
              <StyledTableCell >{patient.dateofbirth}</StyledTableCell>
              <StyledTableCell >{patient.gender}</StyledTableCell>
              <StyledTableCell >{patient.contactdetails}</StyledTableCell>
              <StyledTableCell ><EditIcon onClick={() => handleEdit(patient._id)}/></StyledTableCell>
              <StyledTableCell ><DeleteIcon onClick={() => delPatient(patient?._id)}/></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


      
        <div onClick={handleShow}>
        <img 
        
          className="absolute top-[14px] left-[987px] rounded-[10px] w-[89px] h-[46px]"
          alt=""
          src="/rectangle-1.svg"
        />
        <b className="absolute top-[25px] left-[1013px] text-xl tracking-[0.2px] leading-[26px] inline-block text-neutral-white w-[127px] h-[62px]">
          Add
        </b>
        </div>

        {/* <Button className="absolute top-[25px] left-[1013px] text-xl tracking-[0.2px] leading-[26px] inline-block text-neutral-white w-[127px] h-[62px]">Add</Button> */}
      </div>
      
    </div>

    </div>
  )
}

export default AdminPatients
