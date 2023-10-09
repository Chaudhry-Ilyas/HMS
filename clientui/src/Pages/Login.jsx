import React, { useState, useContext, useEffect } from "react";
import { Context } from "../context";
import Divider from "../Components/Divider";
import { Form, Input, Button, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import {SyncOutlined} from "@ant-design/icons"

const Login = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const history = useNavigate();
  async function submit(e) {
    e.preventDefault();


      try { 
        setLoading(true);
        const {data} =  await axios.post("http://localhost:8000/login", {
    
          username: formData.username,
          password: formData.password,
        }, 
  )

        localStorage.setItem("token", JSON.stringify(data.token));
        localStorage.setItem("user", JSON.stringify(data.user));
        
        {data.user && data.user.role && data.user.role.includes("Admin") ? (
          history("/admin/Dashboard"))
         :
         history("/admin/Dashboard")
        
         }
      

        setLoading(false);     
      } catch(err) {
        toast.error(err.response.data);
        setLoading(false);
      }

      
  }
  useEffect(() => {
    if(localStorage.getItem("token")){
      history("/admin/Dashboard")
      }
    })
  


 


  return (
    <div className="h-screen bg-primary flex justify-center items-center">
      <div className="bg-white p-4 rounded w-[475px]">
        <h1 className="text-primary py-4 text-center text-2xl">
    
          <span className="text-orange-500 text-2xl"> <b>Hospital Management <br /> System </b></span>
         
        </h1>
        <Divider />

        <Form layout="vertical">
          <Form.Item label="Username" name="Username">
            <Input
              placeholder="Username"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input
              placeholder="Password"
              value={formData.password}
              type="password"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </Form.Item>
          <Button
            type="primary"
            block
            className="mt-3"
            onClick={submit}
            disabled={ !formData.username || !formData.password || loading}
          >
            {" "}
            {loading ? <SyncOutlined spin /> : "Login"}
          </Button>
          <div className="mt-5 text-center">
            
            <br />
            <span className="text-orange-700">
             Click Here To Forgot Password ?{" "}
              <Link className="text-primary" to="/forgot-password">
                Forgot Password
              </Link>
            </span>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
