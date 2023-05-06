import React, { useEffect, useState } from 'react'
import axios from 'axios';

import "./form.css"
import { NavLink, useNavigate } from 'react-router-dom';
const Singup = () => {
    const [s,setS]=useState({
        name:"",
        email:"",
        mobile:"",
        password:""
    })

    const navigate=useNavigate()


    const handleChange=(e)=>{
        setS({...s,[e.target.name]:e.target.value}) 
        console.log(s)
       }

       const onSubmit= async(e)=>{
        e.preventDefault()


      const users= await axios.post("https://ecommerce2-7jo6.onrender.com/signup",s)

        console.log(s)
        //  localStorage.setItem("users",JSON.stringify(users))
        // console.log(users)
          navigate("/login")
        

       }


  return (
    <div className='form' >
        
        <div className='image-login'>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT80fptDv0Y1ZRehCuG36QGHhwC2RsaHZH4NxEQGsWt-MFD9LeK-OFpLUBwAvl--H3fYEgQCaghJ7E&usqp=CAU&ec=48665701" alt="" className='signupimage' /> 

        </div>

        <div>
        <div className='logo'> <img src="https://i0.wp.com/www.applestore.pk/wp-content/uploads/2020/07/ishop-logo-01.png?resize=600%2C600&ssl=1" alt="404" width={100} />
        </div>
        <h3 className='headingname'>Sign Up</h3>

       <form action="POST" onSubmit={onSubmit}>
        <label className='labelname ' htmlFor="name">Name:</label>
        <input className='inputfield1'  type="text" name="name" id="name" value={s.name} onChange={handleChange} /><br />
        <label className='labelname' htmlFor="email">Email:</label>
        <input className='inputfield2'  type="email" name="email" id="email" value={s.email}  onChange={handleChange}/><br />
        <label className='labelname' htmlFor="contact">Contact no.:</label>
        <input className='inputfield3' type="number" name="mobile" id="contact" value={s.mobile}  onChange={handleChange}/><br />
        <label className='labelname' htmlFor="password">Password</label>
        <input className='inputfield4' type="password" name="password" id="password" value={s.password}  onChange={handleChange}/><br />

        <button className='singupbutton'>Sing Up</button>
       </form>
        <p>Already have an account? <NavLink to="/Login">Log in</NavLink>  now</p>
      </div>

    </div>
  )
}

export default Singup;