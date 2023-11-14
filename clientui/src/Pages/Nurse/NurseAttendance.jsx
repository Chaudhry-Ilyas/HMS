import React, { useContext, useEffect, useState } from "react";
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

import Nursedash from './Nursedash'

const NurseAttendance = () => {
    const options = ["Present", "Absent", "Leave"];
  const indexes =[]
  let user_Id;
  const index=0;
  const [user,setUser]=useState([]);
  const getUsers = async () => {
    try {
      let { data } = await axios.get(`http://localhost:8000/gettingusersId/${formData.username}`);
      setUser(data)
    } catch (err) {
      console.log("Error", err);
    }
  };
  const [username,setUsername ]=useState();
  const [attendanceWithUser,SetAttendanceWithUser ]=useState();
  const getUsername = async () => {
    try {
      let { data } = await axios.get("http://localhost:8000/usersname");
      setUsername(data)
    } catch (err) {
      console.log("Error", err);
    }
  };
  const getAttendanceWithUser = async () => {
    try {
      let { data } = await axios.get("http://localhost:8000/attendancegetting");
     SetAttendanceWithUser(data)
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
    const [editattendance,setEditAttendance] = useState({})
    const handleClose = () => {
      setShow(false)
      setIsEdit(false)
    }
    const handleShow = () => setShow(true);
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);
    const [attendancesArray, setAttendancesArray] = useState([]);
    const [image, setImage] = useState({});
    const getAttendances = async () => {
      try {
        let { data } = await axios.get("http://localhost:8000/attendances");
        setAttendancesArray(data);
      } catch (err) {
        console.log("Error", err);
      }
    };
    useEffect(() => {
      getAttendances();
  getAttendanceWithUser()
      getUsername()
      
    }, []);
    console.log(attendanceWithUser);
 
    const getAttendance = async (id) => {
      setLoading(true)
      try {
        const {data} = await axios.get(`http://localhost:8000/attendance/${id}`);
        setEditAttendance(data)
        
        setLoading(false)
      } catch (error) {
        setLoading(false)
      }
    }
  
    const handleEdit = (id) => {
      handleShow()
      setIsEdit(true)
      getAttendance(id)
      console.log(editattendance)
    }
    
    
  
    
    async function submit(e) {
      getUsers()
      e.preventDefault();
  
      // console.log(formData);
      try {
        setLoading(true);
        console.log(formData.username)
    
      console.log(user)
      const {data} = await axios.post("http://localhost:8000/addAttendance", {
         
      
        userId: user,
        username:formData.username,
          date: formData.date,
        
          status: formData.status,
   
   
          
          
          
          
          
        });
        setUser([])
  
        toast.success("Attendance Marked Successfully ....");
        setAttendancesArray([...attendancesArray, data])
        setLoading(false);
        handleClose()
  
        console.log("SIGNUP RESPONSE: ", data);
      } catch (err) {
        toast.error(err.response.data);
        setLoading(false);
      }
    }
    const editData = async () => {
      try {
        const {data} = await axios.put(`http://localhost:8000/attendances/${editattendance?._id}`, formData );
        getAttendances()
        handleClose()
  
      } catch (error) {}
    }
    const delAttendance = async(id) => {
      try {
        const data = await axios.delete(`http://localhost:8000/attendance/${id}`)
      } catch (error) {
        
      }
    }
  return (
    <div>
    <div className="relative bg-neutral-white w-full h-[1024px] overflow-hidden text-left text-sm text-neutral-gray-dark font-h5-bold-20-26-02px">

   <Nursedash/>
   <Modal centered show={show} onHide={handleClose}>
     <Modal.Header closeButton>
       <Modal.Title>{isEdit ? "Edit" : "Mark"} Attendance</Modal.Title>
     </Modal.Header>
     <Modal.Body>
       <div className=" bg-primary flex justify-center items-center">
         <div className="bg-white p-4 rounded w-[475px]">
           <h1 className="text-primary py-4 text-center text-2xl">
             <span className="text-orange-500 text-2xl">
               {" "}
               {isEdit ? "Edit" : "Mark New"} Attendance
             </span>
           </h1>
           <Divider />

           {loading ? "Loading..." : (
             <Form layout="Horizontal">
             <Form.Item label="Username" name="Username">
             <Dropdown
                 options={username}
                 value={ formData.username}
                 placeholder="Select an option"
                 // defaultValue={isEdit ? editProduct?.category : ""}

                 onChange={(e) =>
                   setFormData({ ...formData, username: e.value })
                 }
               />
             </Form.Item>
             <Form.Item label="Date" name="Date">
               <Input
                 placeholder="yyyy-mm-dd"
                 value={formData.date}
                 defaultValue={isEdit ? editattendance?.date : ""}
                 onChange={(e) =>
                   setFormData({ ...formData, date: e.target.value })
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
       Attendance
     </b>
     <TableContainer className="absolute w-[calc(100%_-_48px)] top-[86px] left-[0px] tracking-[0.1px] leading-[20px]" component={Paper}>
   <Table sx={{ minWidth: 600 }} aria-label="customized table">
     <TableHead>
       <TableRow>
       <StyledTableCell >User Id</StyledTableCell>
         <StyledTableCell >Name</StyledTableCell>
         <StyledTableCell >Date</StyledTableCell>
         <StyledTableCell >Status</StyledTableCell>
       
       </TableRow>
     </TableHead>
     <TableBody>
       {attendancesArray.map((attendance) => (
         <StyledTableRow >
          <StyledTableCell >{attendance.userId}</StyledTableCell>
           <StyledTableCell >{attendance.username}</StyledTableCell>
           <StyledTableCell >{attendance.date}</StyledTableCell>
           <StyledTableCell >{attendance.status}</StyledTableCell>
         </StyledTableRow>
       ))}
     </TableBody>
   </Table>
 </TableContainer>


  

     {/* <Button className="absolute top-[25px] left-[1013px] text-xl tracking-[0.2px] leading-[26px] inline-block text-neutral-white w-[127px] h-[62px]">Add</Button> */}
   </div>
   
 </div>
 </div>
  )
}

export default NurseAttendance
