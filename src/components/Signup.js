import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './LoginSignup.css'


export default function Signup() {
    const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const navigate = useNavigate()

    useEffect(()=>{
      const auth = localStorage.getItem("user");
      if (auth){
        navigate("/")
      }
    })

  const addUser = (e)=>{
    e.preventDefault()
    console.log(username, " "+ email + " " + password)
    axios.post("http://localhost:3333/users",{
        username : username,
        email : email,
        password: password
    }).then((resp)=>{
      localStorage.setItem("user",JSON.stringify(resp.data));
        alert("User Added Successfully")
        navigate("/blogs")

    })
}


  return (
    <div className='centerform'>
            <div className="form">
      <div className="title">Welcome</div>
      <div className="subtitle">Let's create your account!</div>
      <div className="input-container ic1">
        <input id="username" className="input" type="text" placeholder="rohan james"  value={username} onChange={(e)=> setusername(e.target.value)} />
        <div className="cut">Username</div>
      </div>
      <div className="input-container ic2">
        <input id="email" className="input" type="email" placeholder="xyz@gmail.com"  value={email} onChange={(e)=> setemail(e.target.value)} />
        <div className="cut cut-short">Email</div>
      </div>
      <div className="input-container ic2">
        <input id="passowrd" className="input" type="password" placeholder="********"  value={password} onChange={(e)=> setpassword(e.target.value)}/>
        <div className="cut cut-short">Password</div>
      </div>
      <button type="submit" className="submit"  onClick={(e)=>addUser(e)}>Signup</button>
    </div>
    </div>
  )
}
