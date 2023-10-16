import React, { useContext, useEffect, useState } from "react";
import AdminDash from './AdminDash'
import {  Button} from 'react-bootstrap'
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Divider from "../../Components/Divider";
import { Form, Input, message } from "antd";
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
const AdminStaff = () => {
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
    const [editStaff ,setEditStaff] = useState({})
    const handleClose = () => {
      setShow(false)
      setIsEdit(false)
    }
    const handleShow = () => setShow(true);
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);
    const [staffsArray, setStaffsArray] = useState([]);
    const [image, setImage] = useState({});
    const getStaffs = async () => {
      try {
        let { data } = await axios.get("http://localhost:8000/staffs");
        setStaffsArray(data);
      } catch (err) {
        console.log("Error", err);
      }
    };
    useEffect(() => {
      getStaffs();
    }, []);
    const getStaff = async (id) => {
      setLoading(true)
      try {
        const {data} = await axios.get(`http://localhost:8000/staff/${id}`);
        setEditStaff(data)
        
        setLoading(false)
      } catch (error) {
        setLoading(false)
      }
    }
  
    const handleEdit = (id) => {
      handleShow()
      setIsEdit(true)
      getStaff(id)
      console.log(editStaff)
    }
    
    
  
    const handleImageUpload = (e) => {
      let file = e.target.files[0];
      setPreview(URL.createObjectURL(file));
      setUploadButtonText(file.name);
      setValues({ ...values, loading: true });
  
      // image Resizing
      Resizer.imageFileResizer(file, 720, 500, "JPEG", 1000, 0, async (url) =>{
             try {           
               let {data} = await axios.post("http://localhost:8000/user/upload-image",{
                  image: url,
               }); 
               console.log("IMAGE UPLOADED", data);
               //set Image in the state 
               setImage(data);
               setValues({ ...values, loading: false });
  
             } catch (err) {
                 console.log(err);
                 setValues({ ...values, loading: false });
                 toast("Image Upload failed. Try again later!!");
             }
      });
   }
   const handleImageDelete = async () => {
       try {
         setValues({ ...values, loading: true });
         const res = await axios.post('http://localhost:8000/user/remove-image',{image});  
         setImage({});
         setPreview('');
         setUploadButtonText("Upload Image"); 
         setValues({ ...values, loading: false });
     } catch (err){
         console.log(err);
         setValues({ ...values, loading: false });
         toast("Something went wrong!!");
     }
   }
    async function submit(e) {
      e.preventDefault();
  
      // console.log(formData.category);
      try {
        setLoading(true);
        const {data} = await axios.post("http://localhost:8000/staff/add", {
         
        username: formData.username,
          password: formData.password,
          role:"Staff",
          image:image.Location,  
        firstname: formData.firstname,
          lastname: formData.lastname,
          email: formData.email,
          staffrole:formData.staffrole
          
          
          
          
        });
  
        toast.success("Staff Added Successfully ....");
        setStaffsArray([...staffsArray, data])
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
        console.log(editStaff)
        const {data} = await axios.put(`http://localhost:8000/staff/${editStaff?._id}`, formData );
        getStaffs()
        handleClose()
  
      } catch (error) {}
    }
    const delStaff = async(id) => {
      try {
        const data = await axios.delete(`http://localhost:8000/staffs/${id}`)
      } catch (error) {
        
      }
    }
    const options = ["Sweeper", "Receptionist", "Guard"];
  return (
    <div>
       <div className="relative bg-neutral-white w-full h-[1024px] overflow-hidden text-left text-sm text-neutral-gray-dark font-h5-bold-20-26-02px">
     
      <AdminDash/>
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{isEdit ? "Edit" : "Add"} Staff</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className=" bg-primary flex justify-center items-center">
            <div className="bg-white p-4 rounded w-[475px]">
              <h1 className="text-primary py-4 text-center text-2xl">
                <span className="text-orange-500 text-2xl">
                  {" "}
                  {isEdit ? "Edit" : "Add New"} Staff
                </span>
              </h1>
              <Divider />

              {loading ? "Loading..." : (
                <Form layout="Horizontal">
                <Form.Item label="First Name" name="FirstName">
                  <Input
                    placeholder="FirstName"
                    value={formData.firstname}
                    defaultValue={isEdit ? editStaff?.firstname : ""}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                  />
                </Form.Item>
                <Form.Item label="Last Name" name="LastName">
                  <Input
                    placeholder="LastName"
                    value={formData.lastname}
                    defaultValue={isEdit ? editStaff?.lastname : ""}
                    onChange={(e) =>
                      setFormData({ ...formData, lastname: e.target.value })
                    }
                  />
                </Form.Item>
                <Form.Item label="Email" name="Email">
                  <Input
                    placeholder="Email"
                    value={formData.email}
                    defaultValue={isEdit ? editStaff?.email : ""}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </Form.Item>
                <Form.Item label="Staff Role" name="Staff Role">
                <Dropdown
                    options={options}
                    value={ formData.staffrole}
                    placeholder="Select an option"
                    // defaultValue={isEdit ? editProduct?.category : ""}

                    onChange={(e) =>
                      setFormData({ ...formData, staffrole: e.value })
                    }
                  />
                </Form.Item>
               
                <Form.Item label="UserName" name="UserName">
                  <Input
                    placeholder="UserName"
                    value={formData.username}
                    defaultValue={isEdit ? editStaff?.user.username : ""}
                    onChange={(e) =>
                      setFormData({ ...formData, username: e.target.value })
                    }
                  />
                </Form.Item>
                <Form.Item label="Password" name="Password">
                  <Input
                    placeholder="Password"
                    value={formData.password}
                    defaultValue={isEdit ? editStaff?.user.password : ""}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                  />
                </Form.Item>
                <Form.Item label="Role" name="Role">
                  <Input
                    placeholder="Role"
                    value={formData.role}
                    defaultValue={"Staff"}
                    disabled
                    onChange={(e) =>
                      setFormData({ ...formData, role: e.target.value })
                    }
                  />
                </Form.Item>
                <Form.Item label="Image" >
               <div className="row pt-3">
              <div className="col-md-8">
                  <div className="form-group">
                      <label className="btn btn-outline-primary col-12 text-left">
                         {uploadButtonText}
                         <input type="file" 
                         name="image" 
                         onChange={handleImageUpload} 
                         hidden />
                      </label>
                  </div>
               </div>   

               {preview && (
                 <div className="col-md-4">
                    <Badge count="X" onClick={handleImageDelete}
                    className="pointer">
                      <Avatar style={{width: "60px", height: "60px", marginTop: "-10px"}} width={200} src={preview} />
                    </Badge>
                 </div>
               )}
          </div>     

               </Form.Item>

                
              </Form>
            


              )}
               <hr />
                    <pre>{JSON.stringify(image, null, 4)}</pre>
              
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
         Staff
        </b>
        <TableContainer className="absolute w-[calc(100%_-_48px)] top-[86px] left-[0px] tracking-[0.1px] leading-[20px]" component={Paper}>
      <Table sx={{ minWidth: 600 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell >Email</StyledTableCell>
            <StyledTableCell >Staff Role</StyledTableCell>
           
            <StyledTableCell >Edit</StyledTableCell>
            <StyledTableCell >Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {staffsArray.map((staff) => (
            <StyledTableRow >
             <StyledTableCell >{staff.firstname +" "+ staff.lastname}</StyledTableCell>
              
              <StyledTableCell >{staff.email}</StyledTableCell>
              <StyledTableCell >{staff.staffrole}</StyledTableCell>
             
              <StyledTableCell ><EditIcon onClick={() => handleEdit(staff._id)}/></StyledTableCell>
              <StyledTableCell ><DeleteIcon onClick={() => delStaff(staff?._id)}/></StyledTableCell>
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

export default AdminStaff
