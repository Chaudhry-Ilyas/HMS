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

function AdminComplains () {
  const options = ["Pending", "In Progress", "Completed"];
  const indexes =[]
  
  const [patient,setPatient ]=useState();
  const getPatients = async () => {
    try {
      let { data } = await axios.get("http://localhost:8000/patients/ids");
      setPatient(data);
    } catch (err) {
      console.log("Error", err);
    }
  };
 
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
    const [editComplain ,setEditComplain] = useState({})
    const handleClose = () => {
      setShow(false)
      setIsEdit(false)
    }
    const handleShow = () => setShow(true);
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);
    const [complainsArray, setComplainsArray] = useState([]);
    const [image, setImage] = useState({});
    const getComplains = async () => {
      try {
        let { data } = await axios.get("http://localhost:8000/complains");
        setComplainsArray(data);
      } catch (err) {
        console.log("Error", err);
      }
    };
    useEffect(() => {
      getComplains();
      getPatients();
  
    }, []);
 
    const getComplain = async (id) => {
      setLoading(true)
      try {
        const {data} = await axios.get(`http://localhost:8000/complain/${id}`);
        setEditComplain(data)
        
        setLoading(false)
      } catch (error) {
        setLoading(false)
      }
    }
  
    const handleEdit = (id) => {
      handleShow()
      setIsEdit(true)
      getComplain(id)
      console.log(editComplain)
    }
    
    
  
    
    async function submit(e) {
      e.preventDefault();
  
      // console.log(formData);
      try {
        setLoading(true);
        
      
        const {data} = await axios.post("http://localhost:8000/complain/add", {
         
      
        patientId: formData.patientId,
          description: formData.description,
        
          status: formData.status,
  
   
          
          
          
          
          
        });
  
        toast.success("Complain Added Successfully ....");
        setComplainsArray([...complainsArray, data])
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
        const {data} = await axios.put(`http://localhost:8000/complains/${editComplain?._id}`, formData );
        getComplains()
        handleClose()
  
      } catch (error) {}
    }
    const delComplain = async(id) => {
      try {
        const data = await axios.delete(`http://localhost:8000/complain/${id}`)
        getComplains()

      } catch (error) {
        
      }
    }
  return (
    <div className="relative bg-neutral-white w-full h-[1024px] overflow-hidden text-left text-sm text-neutral-gray-dark font-h5-bold-20-26-02px">
      <AdminDash/>
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{isEdit ? "Edit" : "Add"} Complain</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className=" bg-primary flex justify-center items-center">
            <div className="bg-white p-4 rounded w-[475px]">
              <h1 className="text-primary py-4 text-center text-2xl">
                <span className="text-orange-500 text-2xl">
                  {" "}
                  {isEdit ? "Edit" : "Add New"} Complain
                </span>
              </h1>
              <Divider />

              {loading ? "Loading..." : (
                <Form layout="Horizontal">
                <Form.Item label="Patient Id" name="Patient Id">
                <Dropdown
                    options={patient}
                    value={ formData.patientId}
                    placeholder="Select an option"
                    // defaultValue={isEdit ? editProduct?.category : ""}

                    onChange={(e) =>
                      setFormData({ ...formData, patientId: e.value })
                    }
                  />
                </Form.Item>
                <Form.Item label="Description" name="Description">
                  <Input
                    placeholder="Description"
                    value={formData.description}
                    defaultValue={isEdit ? editComplain?.description : ""}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                  />
                </Form.Item>
               
                <Form.Item label="Status" name="Status">
                  <Dropdown
                    options={options}
                    value={ formData.status}
                    placeholder="Select an option"
                    // defaultValue={isEdit ? editProduct?.category : ""}

                    onChange={(e) =>
                      setFormData({ ...formData, status: e.value })
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
          Complains
        </b>
        <TableContainer className="absolute w-[calc(100%_-_48px)] top-[86px] left-[0px] tracking-[0.1px] leading-[20px]" component={Paper}>
      <Table sx={{ minWidth: 600 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Patient Id</StyledTableCell>
            <StyledTableCell >Description</StyledTableCell>
            <StyledTableCell >Status</StyledTableCell>
          
            <StyledTableCell >Edit</StyledTableCell>
            <StyledTableCell >Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {complainsArray.map((complain) => (
            <StyledTableRow >
             <StyledTableCell >{complain.patientId}</StyledTableCell>
              
              <StyledTableCell >{complain.description}</StyledTableCell>
              <StyledTableCell >{complain.status}</StyledTableCell>
           
              <StyledTableCell ><EditIcon onClick={() => handleEdit(complain._id)}/></StyledTableCell>
              <StyledTableCell ><DeleteIcon onClick={() => delComplain(complain?._id)}/></StyledTableCell>
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
     
   
  );
};

export default AdminComplains;
