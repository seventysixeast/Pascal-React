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
      let login_user: any = localStorage.getItem("User") ? JSON.parse(localStorage.getItem("User") || "") : null;
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
                            if(loginuser.UserRole == "Employee")
                            {
                                console.log("login with employee"); 
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


async function handleSubmit1(e: any) {
  // const handleSubmit = async e : any=> {
      console.log("in login");
    e.preventDefault();    
    // setToken(token);
    var qs = require('qs');   
   var grant_type= 'password';
     var result = fetch('http://localhost:53965/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: qs.stringify({ 'grant_type': 'password',      
        'username': user.username,
        'password': user.password})
      })
      .then(response => { return response.json();})
      .then(responseData => 
        {
          console.log("responseData = ",responseData);
          if(responseData.access_token != null)
          {
           // let context = { ...userContext };
            localStorage.setItem("token", "Bearer "+responseData.access_token);  
            let userservice = new UserService();
           userservice.GetUser().then((data) => {
              console.log("Getting user Response", data);
            })
            // fetch('http://localhost:53965/api/User/UserInfo', {
            //   method: 'GET',
            //   headers: {
            //     'Content-Type': 'application/json',
            //     'authorization' : "Bearer "+responseData.access_token
            //   }             
            // })
            // .then(response => { return response.json();})      
          }
          //return responseData;
        })
      
      //  .then(function (data: any) { 
      //    var res = data.json(); 
      //    console.log(data);
      //    console.log(res.access_token);
      //    // console.log(data.user);
      //   // let context = { ...userContext };
      //               // context.accessToken = data.token;
      //               // let usr: any = data.user;
      //               // let st = JSON.stringify(usr);
      //               // localStorage.setItem("token", data.token);
      //               // localStorage.setItem("user", st);
      //               // setUser(data.user);
      //   })
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