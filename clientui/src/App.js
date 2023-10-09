import logo from './logo.svg';
import './App.css';
import 'antd/dist/reset.css';
import {BrowserRouter as Router,Routes,Route, useParams, useLocation} from 'react-router-dom'
import Login from './Pages/Login';
import Forgotpassword from './Pages/ForgotPassword';
import "react-toastify/dist/ReactToastify.css";
import AdminComplains from './Pages/Admin/AdminComplains';
import AdminDash from './Pages/Admin/AdminDash';
import { ToastContainer } from 'react-toastify';
import AdminDoctors from './Pages/Admin/AdminDoctors';
import AdminNurses from './Pages/Admin/AdminNurses';
import AdminStaff from './Pages/Admin/AdminStaff';
import AdminPatients from './Pages/Admin/AdminPatients';
import AdminAttendance from './Pages/Admin/AdminAttendance';
import AdminMain from './Pages/Admin/AdminMain';
import { useContext, useEffect, useState } from 'react';
import { Context } from './context';
function App() {
  const {pathname} = useLocation()
  const [search,setSearch]=useState("");
  const [filter,setfilter]=useState("");
  const { state, dispatch } = useContext(Context);

  // const getLoggedUser = ()=>{
  //   const user=localStorage.getItem("user");
  //   console.log(user);
  //   if(user){
  //     return (dispatch({
  //       type: "LOGIN",
  //       payload: JSON.parse(user)
  //    }))
  //   }else{ 
  //     return (
  //     dispatch({
  //     type: "LOGIN",
  //     payload: null,
  //  }))}
  // }
  

  // useEffect(()=>{
  //   getLoggedUser()
  // },[])

  return (
    <div >
       <ToastContainer position="bottom-center" />
     <Routes>
       
       <Route path='/' element={<Login/>} />
       <Route path='/forgot-password' element={<Forgotpassword/>} />
       <Route path='/admin/complains' element={<AdminComplains/>} />
       <Route path='/admin/Dashboard' element={<AdminMain/>} />
       <Route path='/admin/Doctors' element={<AdminDoctors/>} />
       <Route path='/admin/Nurses' element={<AdminNurses/>} />
       <Route path='/admin/Staff' element={<AdminStaff/>} />
       <Route path='/admin/Patients' element={<AdminPatients/>} />
       <Route path='/admin/Attendance' element={<AdminAttendance/>} />
     

    </Routes> 
    </div>
  );
}

export default App;
