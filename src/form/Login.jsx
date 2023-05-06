import React, { useState } from "react";
import "./form.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import loginimg from "../Image/login_iphone-removebg-preview.png"

const Login = () => {
  const navigate = useNavigate();
  const [logindata, setlogindata] = useState({
    email: "",
    password: "",
  });

  const change = (e) => {
    setlogindata({ ...logindata, [e.target.name]: e.target.value });
  };


  const loginclick = async () => {
    console.log("email,password");

    let results = await axios.post("https://ecommerce2-7jo6.onrender.com/login",logindata);
    console.log(results,23);

    if(results.data.token){
      localStorage.setItem("token",results.data.token)
      localStorage.setItem("userId",results.data.userId)
      navigate("/")
    }
      else {
      alert("plese enter correct details");
    }

  };

  return (
    <div className="form">
    
      <div>
        <div className="logoimage">
          <img
            src="https://i0.wp.com/www.applestore.pk/wp-content/uploads/2020/07/ishop-logo-01.png?resize=600%2C600&ssl=1"
            alt="404"
            width={100}
          />
        </div>
        <h2 className="loginheading">Login</h2>
        <label className="labellogin" htmlFor="username">
          Email :
        </label>
        <input
          className="inputfield2"
          type="text"
          placeholder="Enter your email"
          name="email"
          value={logindata.email}
          onChange={change}
        />
        <br />
        <label className="labellogin" htmlFor="password">
          Password :
        </label>
        <input
          className="loginpassword"
          type="password"
          placeholder="enter Your password"
          name="password"
          value={logindata.password}
          onChange={change}
        />
        <br />
        <button onClick={loginclick}>LOGIN</button>
        <br />
        <br />
        or Sing Up Using
        <br />
        <h3>SIGN UP</h3>
      </div>


      <img src={loginimg} alt="404" width="80%" className="login-image"/>
    </div>
  );
};

export default Login;
