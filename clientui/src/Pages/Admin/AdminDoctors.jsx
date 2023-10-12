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


const { Option } = Select;

const AdminDoctors = () => {
  
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
  const [editDoctor ,setEditDoctor] = useState({})
  const handleClose = () => {
    setShow(false)
    setIsEdit(false)
  }
  const handleShow = () => setShow(true);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [doctorsArray, setDoctorsArray] = useState([]);
  const [image, setImage] = useState({});
  const getDoctors = async () => {
    try {
      let { data } = await axios.get("http://localhost:8000/doctors");
      setDoctorsArray(data);
    } catch (err) {
      console.log("Error", err);
    }
  };
  useEffect(() => {
    getDoctors();
  }, []);
  const getDoctor = async (id) => {
    setLoading(true)
    try {
      const {data} = await axios.get(`http://localhost:8000/doctor/${id}`);
      setEditDoctor(data)
      
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }

  const handleEdit = (id) => {
    handleShow()
    setIsEdit(true)
    getDoctor(id)
    console.log(editDoctor)
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
      const {data} = await axios.post("http://localhost:8000/doctor/add", {
       
      username: formData.Username,
        password: formData.Password,
        role:"Doctor",
        image:image.Location,  
      firstname: formData.FirstName,
        lastname: formData.LastName,
        email: formData.Email,
        qualification: formData.Qualification,

        specialties: formData.Specialties,
        experience: formData.Experience,
        
        
        
        
      });

      toast.success("Doctor Added Successfully ....");
      setDoctorsArray([...doctorsArray, data])
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
      const {data} = await axios.put(`http://localhost:8000/doctor/${editDoctor?._id}`, formData );
      getDoctors()
      handleClose()

    } catch (error) {}
  }
  const delDoctor = async(id) => {
    try {
      const data = await axios.delete(`http://localhost:8000/doctors/${id}`)
    } catch (error) {
      
    }
  }


  
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  
  return (
    <div>
      
       <div className="relative bg-neutral-white w-full h-[1024px] overflow-hidden text-left text-sm text-neutral-gray-dark font-h5-bold-20-26-02px">
      <AdminDash/>



      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{isEdit ? "Edit" : "Add"} Doctor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className=" bg-primary flex justify-center items-center">
            <div className="bg-white p-4 rounded w-[475px]">
              <h1 className="text-primary py-4 text-center text-2xl">
                <span className="text-orange-500 text-2xl">
                  {" "}
                  {isEdit ? "Edit" : "Add New"} Doctor
                </span>
              </h1>
              <Divider />

              {loading ? "Loading..." : (
                <Form layout="Horizontal">
                <Form.Item label="First Name" name="FirstName">
                  <Input
                    placeholder="FirstName"
                    value={formData.FirstName}
                    defaultValue={isEdit ? editDoctor?.firstname : ""}
                    onChange={(e) =>
                      setFormData({ ...formData, FirstName: e.target.value })
                    }
                  />
                </Form.Item>
                <Form.Item label="Last Name" name="LastName">
                  <Input
                    placeholder="LastName"
                    value={formData.LastName}
                    defaultValue={isEdit ? editDoctor?.lastname : ""}
                    onChange={(e) =>
                      setFormData({ ...formData, LastName: e.target.value })
                    }
                  />
                </Form.Item>
                <Form.Item label="Email" name="Email">
                  <Input
                    placeholder="Email"
                    value={formData.Email}
                    defaultValue={isEdit ? editDoctor?.email : ""}
                    onChange={(e) =>
                      setFormData({ ...formData, Email: e.target.value })
                    }
                  />
                </Form.Item>
                <Form.Item label="Qualification" name="Qualification">
                  <Input
                    placeholder="Qualification"
                    value={formData.Qualification}
                    defaultValue={isEdit ? editDoctor?.qualification : ""}
                    onChange={(e) =>
                      setFormData({ ...formData, Qualification: e.target.value })
                    }
                  />
                </Form.Item>
                <Form.Item label="Specialties" name="Specialties">
                  <Input
                    placeholder="Specialties"
                    value={formData.Specialties}
                    defaultValue={isEdit ? editDoctor?.specialties : ""}
                    onChange={(e) =>
                      setFormData({ ...formData, Specialties: e.target.value })
                    }
                  />
                </Form.Item>
                <Form.Item label="Experience" name="Experience">
                  <Input
                    placeholder="Experience"
                    value={formData.Experience}
                    defaultValue={isEdit ? editDoctor?.experience : ""}
                    onChange={(e) =>
                      setFormData({ ...formData, Experience: e.target.value })
                    }
                  />
                </Form.Item>
                <Form.Item label="UserName" name="UserName">
                  <Input
                    placeholder="UserName"
                    value={formData.Username}
                    defaultValue={isEdit ? editDoctor?.user.username : ""}
                    onChange={(e) =>
                      setFormData({ ...formData, Username: e.target.value })
                    }
                  />
                </Form.Item>
                <Form.Item label="Password" name="Password">
                  <Input
                    placeholder="Password"
                    value={formData.Password}
                    defaultValue={isEdit ? editDoctor?.user.password : ""}
                    onChange={(e) =>
                      setFormData({ ...formData, Password: e.target.value })
                    }
                  />
                </Form.Item>
                <Form.Item label="Role" name="Role">
                  <Input
                    placeholder="Role"
                    value={formData.Role}
                    defaultValue={"Doctor"}
                    disabled
                    onChange={(e) =>
                      setFormData({ ...formData, Role: e.target.value })
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
          Doctors
        </b>
        <TableContainer className="absolute w-[calc(100%_-_48px)] top-[86px] left-[0px] tracking-[0.1px] leading-[20px]" component={Paper}>
      <Table sx={{ minWidth: 600 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell >Email</StyledTableCell>
            <StyledTableCell >Qualification</StyledTableCell>
            <StyledTableCell >Experience</StyledTableCell>
            <StyledTableCell >Edit</StyledTableCell>
            <StyledTableCell >Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {doctorsArray.map((doctor) => (
            <StyledTableRow >
             <StyledTableCell >{doctor.firstname +" "+ doctor.lastname}</StyledTableCell>
              
              <StyledTableCell >{doctor.email}</StyledTableCell>
              <StyledTableCell >{doctor.qualification}</StyledTableCell>
              <StyledTableCell >{doctor.experience}</StyledTableCell>
              <StyledTableCell ><EditIcon onClick={() => handleEdit(doctor._id)}/></StyledTableCell>
              <StyledTableCell ><DeleteIcon onClick={() => delDoctor(doctor?._id)}/></StyledTableCell>
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

export default AdminDoctors
