import { React, useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";

import {
  AppstoreOutlined,
  LoginOutlined,
  UserAddOutlined,
  LogoutOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { toast } from 'react-toastify';
import { Context } from '../../context';
import { getLoggedUser } from '../../utils/getLoggedInUser';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';



function AdminDash() {
  const {pathname} = useLocation();

  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [current, setCurrent] = useState("");
const user = getLoggedUser()
console.log(user);
  
  // useEffect(() => {
  //   process.browser && setCurrent(window.location.pathname);
  // }, [process.browser && window.location.pathname]);

  const logout = async () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    
    // const { data } = await axios.get("http://localhost:8000/logout");
    toast.success("Signout Successfully !!!");
    navigate("/");
  };
  
//   <Menu mode="horizontal">
//     (
//   <SubMenu 
//   icon={<MenuOutlined />}
//   title={user && user.username}
//   className=""
//   >
//     <Item
    
//       onClick={logout}
//       icon={<LogoutOutlined />}
//       style={{ marginLeft: "10px" }}
//       >
//       <a>Logout</a>
//     </Item>
//   </SubMenu>
// )
    
//     </Menu>
  
  // useEffect(() => {
  //   process.browser && setCurrent(window.location.pathname);
  // }, [process.browser && window.location.pathname]);

  return (<div>
    
    <div className="relative bg-neutral-white w-full h-[1024px] overflow-hidden text-left text-lg text-primary-default font-small-3-bold-10-12-02px">
      
      <div className="absolute top-[0px] left-[0px] w-[269px] h-[1024px] text-sm text-neutral-gray-dark">
        <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px]">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] bg-neutral-white shadow-[4px_0px_16px_rgba(16,_30,_115,_0.08)]" />
        </div>
        <div className="absolute w-full top-[86px] right-[0px] left-[0px] h-[88px] text-neutral-gray">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] bg-neutral-white" />
          <div className="absolute w-[calc(100%_-_48px)] top-[calc(50%_-_30px)] left-[24px] tracking-[0.1px] leading-[20px] inline-block">
            MEDICINE
          </div>
          <Link to="/admin/Dashboard" style={{textDecoration: 'none'}}> 
          <b className="absolute w-[calc(100%_-_76px)] top-[calc(50%_+_10px)] left-[52px] tracking-[0.1px] leading-[20px] inline-block">
          <a href="" className={`nav-link ${pathname === "/admin/Dashboard" &&" text-primary-default"}` } style={{textDecoration:'none'}}>
            Dashboard
            </a>
          </b>
          </Link>
          <img
            className={`absolute top-[calc(50%_+_12px)] left-[24px] w-4 h-4 overflow-hidden ${pathname === "/admin/Dashboard" &&" text-primary-default"}`}
            alt=""
            src="/icon--icofont--web--other--pie-chart.svg"
          />
        </div>
        <div className="absolute top-[24px] left-[24px] w-[142px] h-[30px]">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/logoimage@2x.png"
          />
        </div>
        <div className="absolute w-full top-[174px] right-[0px] left-[0px] h-12">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] bg-neutral-white" />
          <Link to="/admin/Doctors" style={{textDecoration: 'none'}}>
          <b className="absolute w-[calc(100%_-_76px)] top-[calc(50%_-_10px)] left-[52px] tracking-[0.1px] leading-[20px] inline-block">
          <a href="" className={`nav-link ${pathname === "/admin/Doctors" &&" text-primary-default"}` } style={{textDecoration:'none'}}>
          
            Doctors
            </a>
          </b>
          </Link>
          <img
            className="absolute top-[calc(50%_-_8px)] left-[24px] w-4 h-4 overflow-hidden"
            alt=""
            src="/icon--icofont--medical--devices--stethoscope-1.svg"
          />
        </div>
        <div className="absolute w-full top-[222px] right-[0px] left-[0px] h-12">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] bg-neutral-white" />
          <Link to="/admin/Nurses" style={{textDecoration: 'none'}}>
          
          <b className="absolute w-[calc(100%_-_76px)] top-[calc(50%_-_10px)] left-[52px] tracking-[0.1px] leading-[20px] inline-block">
          <a href="" className={`nav-link ${pathname === "/admin/Nurses" &&" text-primary-default"}` } style={{textDecoration:'none'}}>
         
            Nurses
         </a>
          </b>
          </Link>
          <img
            className="absolute top-[calc(50%_-_8px)] left-[24px] w-4 h-4 overflow-hidden"
            alt=""
            src="/icon--icofont--medical--staff--doctor-2.svg"
          />
        </div>
        <div className="absolute w-full top-[270px] right-[0px] left-[0px] h-12">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] bg-neutral-white" />
          <Link to="/admin/Attendance" style={{textDecoration: 'none'}}>
          
          <b className="absolute w-[calc(100%_-_76px)] top-[calc(50%_-_10px)] left-[52px] tracking-[0.1px] leading-[20px] inline-block">
          <a href="" className={`nav-link ${pathname === "/admin/Attendance" &&" text-primary-default"}` } style={{textDecoration:'none'}}>
         
            Attendance
            </a>
          </b>
          </Link>
          <img
            className="absolute top-[calc(50%_-_8px)] left-[24px] w-4 h-4 overflow-hidden"
            alt=""
            src="/icon--icofont--medical--staff--nurse-2.svg"
          />
        </div>
        <div className="absolute w-full top-[318px] right-[0px] left-[0px] h-12">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] bg-neutral-white" />
          <Link to="/admin/Patients" style={{textDecoration: 'none'}}>
         
          <b className="absolute w-[calc(100%_-_76px)] top-[calc(50%_-_10px)] left-[52px] tracking-[0.1px] leading-[20px] inline-block">
          <a href="" className={`nav-link ${pathname === "/admin/Patients" &&" text-primary-default"}` } style={{textDecoration:'none'}}>
         
            Patients
         </a>
          </b>
          </Link>
          <img
            className="absolute top-[calc(50%_-_8px)] left-[24px] w-4 h-4 overflow-hidden"
            alt=""
            src="/icon--icofont--medical--disabled--default.svg"
          />
        </div>
        <div className="absolute w-full top-[366px] right-[0px] left-[0px] h-12">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] bg-neutral-white" />
          <Link to="/admin/Staff" style={{textDecoration: 'none'}}>
         
          <b className="absolute w-[calc(100%_-_76px)] top-[calc(50%_-_10px)] left-[52px] tracking-[0.1px] leading-[20px] inline-block">
          <a href="" className={`nav-link ${pathname === "/admin/Staff" &&" text-primary-default"}` } style={{textDecoration:'none'}}>
        
            Staff
        </a>
          </b>
          </Link>
          <img
            className="absolute top-[calc(50%_-_8px)] left-[24px] w-4 h-4 overflow-hidden"
            alt=""
            src="/icon--icofont--web--bank--credit-card.svg"
          />
        </div>
        <div className="absolute w-full top-[414px] right-[0px] left-[0px] h-12">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] bg-neutral-white" />
          <Link to="/admin/Complains" style={{textDecoration: 'none'}}>
         
          <b className="absolute w-[calc(100%_-_76px)] top-[calc(50%_-_10px)] left-[52px] tracking-[0.1px] leading-[20px] inline-block">
          <a href="" className={`nav-link ${pathname === "/admin/Complains" &&" text-primary-default"}` } style={{textDecoration:'none'}}>
        
            Complains
            </a>
          </b>
          </Link>
          <img
            className="absolute top-[calc(50%_-_8px)] left-[24px] w-4 h-4 overflow-hidden"
            alt=""
            src="/icon--icofont--web--question--circled.svg"
          />
        </div>
        <div className="absolute w-full top-[470px] right-[0px] left-[0px] h-12">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] bg-neutral-white" />
          <b className="absolute w-[calc(100%_-_76px)] top-[calc(50%_-_10px)] left-[52px] tracking-[0.1px] leading-[20px] inline-block">
            Help
          </b>
          <img
            className="absolute top-[calc(50%_-_8px)] left-[24px] w-4 h-4 overflow-hidden"
            alt=""
            src="/icon--icofont--web--question--circled.svg"
          />
        </div>
        <img
          className="absolute w-full top-[469.5px] right-[0px] left-[0px] max-w-full overflow-hidden h-px"
          alt=""
          src="/divider.svg"
        />
      </div>
      
      <div className="absolute top-[-5px] left-[269px] w-[1268px] h-[88px] text-smi text-neutral-gray">
      
        <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] bg-neutral-background" />
        <div className="absolute top-[calc(50%_-_23px)] right-[35px] rounded-[50%] box-border w-[46px] h-[46px] border-[3px] border-solid border-neutral-divider" />
       
        <img  onClick={handleClick}
          className="absolute top-[calc(50%_-_20px)] right-[38px] w-10 h-10"
          alt=""
          src="/avatar--circled--man--16.svg"
        ></img>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu>
       
       
        <div className="absolute top-[calc(50%_-_20px)] left-[36px] w-[350px] h-10">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-81xl bg-neutral-white" />
          <div className="absolute w-[calc(100%_-_58px)] top-[calc(50%_-_8px)] left-[42px] tracking-[0.1px] leading-[16px] flex items-center">
            Search
          </div>
          <img
            className="absolute top-[calc(50%_-_7px)] left-[16px] w-3.5 h-3.5 overflow-hidden"
            alt=""
            src="/icon--icofont--web--search--default.svg"
          />
        </div>
        <img
          className="absolute top-[calc(50%_-_12px)] right-[104px] w-6 h-6 overflow-hidden"
          alt=""
          src="/icon--icofont--web--notification--notification.svg"
        />
        
        <div className="absolute top-[calc(50%_-_18px)] right-[94px] w-4 h-4 text-center text-3xs text-neutral-white">
          <div className="absolute top-[calc(50%_-_10px)] right-[-2px] rounded-[50%] bg-red-default box-border w-5 h-5 border-[2px] border-solid border-neutral-background" />
          <b className="absolute top-[calc(50%_-_6px)] right-[2px] tracking-[0.2px] leading-[12px] flex items-center justify-center w-3">
            9
          </b>
        </div>
        
      </div>
     
    </div>
   


    </div>
  );
};

export default AdminDash;
