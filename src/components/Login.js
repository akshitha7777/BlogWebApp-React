import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './LoginSignup.css'

export default function Login() {
  const navigate = useNavigate();
  const [password, setpassword] = useState("")
    const [email, setemail] = useState("")
    const [users, setusers] = useState("")

  useEffect(()=>{
    const auth = localStorage.getItem("user");
    if (auth){
      navigate("/")
    }

    else{
      axios.get("http://localhost:3333/users").then(({data})=>{
      setusers(data)
      })
    }
  },[])


   const validateUser = (e)=>{
    e.preventDefault()
    let flag = false
    console.log(users)
    for(var i=0; i<users.length; i++){
      if (users[i].email === email && users[i].password === password){
        localStorage.setItem("user",JSON.stringify(users[i]));
        flag=true
      }
      
    }
    if (flag === true)
      navigate('/blogs')
    else
      alert("Invalid Credentials")
    
  }

  return (
    <div className='centerform'>
            <div className="form ">
      <div className="title">Welcome</div>
      <div className="subtitle">Let's login your account!</div>
     
      <div className="input-container ic2">
        <input id="email" className="input" type="email" placeholder="xyz@gmail.com" value={email} onChange={(e) => setemail(e.target.value)} />
        <div className="cut cut-short">Email</div>
      </div> <br />
      <div className="input-container ic2">
        <input id="passowrd" className="input" type="password" placeholder="********" value={password} onChange={(e) => setpassword(e.target.value)}/>
        <div className="cut cut-short">Password</div>
      </div>
      <button type="submit" className="submit"  onClick={(e)=>validateUser(e)}>Login</button>
    </div>
    </div>
  )
}
