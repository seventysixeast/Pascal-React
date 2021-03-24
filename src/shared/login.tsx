import React, { useEffect, useState } from 'react';
import '../assets/css/login.css';
import {IUser} from '../contracts/IUser';
import AuthService from '../services/authService';
import { toast } from 'react-toastify';
import logourl from "../assets/images/logo.png";
import UserService from '../services/userService';
import {Redirect, Route, useHistory} from 'react-router-dom';
import Dashboard from '../firm/pages/dashboard';
import ClientDashboard from '../client/pages/dashboard';
import FirmLayout from '../firm/layout/firmlayout';


const Login =()=>{
    // const [username, setUserName] : any = useState();
    // const [password, setPassword] : any = useState();    
    const [token, setToken] : any = useState();
    const [user, setUser] : any = useState({ grant_type: "password", username: "", password: ""} as IUser);
    const [istoken, setIsToken] = useState(false);
    const [user_role , setUser_role] : any = useState();

    useEffect(() => {
      console.log("LoggedIn User");
      let existing_token = localStorage.getItem("token");
      setToken(existing_token);     
      let login_user: any = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") || "") : null;
      if(existing_token != null && existing_token != "" && existing_token != undefined)
      {
        console.log("istoken ddddd= "+existing_token);
        setIsToken(true);
      }
      if(login_user != null && login_user != undefined)
      {
        setUser_role(login_user.UserRole);
        console.log("loggedinuser =",login_user);
      }
      console.log("istoken= "+token);
  }, [])
      
    

    const detailChange = (name: string, value: string)=>{
        let usr = { ...user };
        usr[name as keyof IUser] = value;
        setUser(usr);      
    }

 const handleSubmit = async(e: any)=>{
  e.preventDefault();    
    console.log("token is null");
    if (user.username != null && user.password != null && user.username != "" && user.password != "") {
        let service = new AuthService();
        await service.login(user).then((data) => {
            console.log("Login Response", data);        
                if (data.access_token != null) { 
                      localStorage.setItem("token", "Bearer "+data.access_token);  
                      let expiryDate: string = (Date.now() + ((Number.parseInt(data.expires_in)) * (1000))).toString();
                      localStorage.setItem('AuthTokenExpiration', expiryDate);
                      let userservice = new UserService();
                      userservice.GetUser().then((userdata) => {
                        console.log("Getting user Response", userdata);    
                        if(userdata != null)
                        {
                          var loginuser = userdata[0];
                          if(loginuser != null)
                          {
                            localStorage.setItem("user", JSON.stringify(loginuser));
                            setUser_role(loginuser.UserRole);  
                            if(loginuser.UserRole == "Employee" || loginuser.UserRole == "Firm")
                            {
                                console.log("login with employee"); 
                                setIsToken(true);  
                            }
                            else if(loginuser.UserRole == "Client")
                            {
                              console.log("login with client");
                            }
                            else{
                              console.log("role not found.");
                            }
                          }
                        }                    
                      }) 
                }
                else
                {
                  toast(data.message, { type: "error" });
                }            
        }).catch((ex) => {
            console.log(ex);
            toast("Login Failed", { type: "error" });
        })
    }
    else
    {
      console.log("credentials not found");
    }
}

    return( 
     !istoken ? 
     <div className="auth-wrapper">
      <div className="auth-inner">    
          <div className="logo-container">
              <img src={logourl} alt="Pascal... Logo" className="logo-size"></img>
            </div>
         
          <div className="login-form">
             <form onSubmit={handleSubmit}>
                      <small>Please Sign In with your username and password</small>
                      <div className="form-group">
                          <label>Email/Username</label>
                          <input type="email" className="form-control" placeholder="Enter username" onChange={e => detailChange("username",e.target.value)}/>
                      </div>

                      <div className="form-group">
                          <label>Password</label>
                          <input type="password" className="form-control" placeholder="Enter password" onChange={e => detailChange("password",e.target.value)}/>
                      </div>

                      <div className="form-group">
                          <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="customCheck1" />
                              <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                          </div>
                      </div>

                      <button type="submit" className="btn btn-primary btn-block login-btn">Submit</button>
                      <p className="forgot-password text-right">
                          Forgot <a href="#">password?</a>
                      </p>
                  </form>
            </div>
      </div>
      </div>
      :
      user_role == "Employee" || user_role == "Firm" ? 
      <div>
        <FirmLayout></FirmLayout>
      </div>
      :
      <div>
        <ClientDashboard></ClientDashboard>
      </div>
    )
}

// Login.propTypes = {
//     setToken: PropTypes.func.isRequired
//   };

export default Login;