import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Blogs() {
    const [blogs, setblogs] = useState("")
    const navigate = useNavigate();
    const auth = localStorage.getItem("user")
    const userEmail = JSON.parse(auth).email

    useEffect(()=>{
        axios.get("http://localhost:3001/blogs").then(({data})=>{
        setblogs(data)
    })
})

const getData = (id)=>{
  navigate(`/readblog/${id}`)
}

const updateData = (id)=>{
  navigate(`/updateblog/${id}`)
}

const deleteData = (id)=>{
  axios.delete(`http://localhost:3001/blogs/${id}`)
}


  return (
    <div className='container' style={{  maxWidth:'70%' ,margin: 'auto' }}>
      <br /><br />  <br />  <br />  <br />
{ blogs ?

  blogs.map((item,i)=>{
   return item.userEmail === userEmail? <><div className="card" key={i}>
    <div className="card-header" style={{fontSize:'20px', fontWeight:'bold'}}>
    <img src={"images/profile-pic.jpeg"}  alt="Avatar" className="avatar" />  {item.userName}
    <img src={"https://i.pinimg.com/originals/65/a5/c7/65a5c7139bf0745da601c4cd4fa3e5d2.png"}  alt="twitter" className="avatar"  style={{width:'70px'}} /> 

    </div>
    <div className="card-body">
    <h3 className="card-title">{item.title}</h3>
        <p className="card-text">{item.description.slice(1,220)}.......</p>
        <div style={{margin:'20px'}}>
        <button className="btn btn-primary" onClick={()=>getData(item.id)} style={{marginTop:'20px'}}>Read more</button> &nbsp;&nbsp;&nbsp;
        <button className="btn btn-primary" onClick={()=>updateData(item.id)} style={{marginTop:'20px'}}>Update Blog</button>&nbsp;&nbsp;&nbsp;
        <button className="btn btn-primary" onClick={()=>deleteData(item.id)} style={{marginTop:'20px'}}>Delete Blog</button>
        </div>
    </div>
    </div> <br /><br /> </>
    : 
    <>
    <div className="card" key={i}>
    <div className="card-header" style={{fontSize:'20px', fontWeight:'bold'}}>
    <img src={"images/profile-pic.jpeg"}  alt="Avatar" className="avatar" />   {item.userName}
    <img src={"https://i.pinimg.com/originals/65/a5/c7/65a5c7139bf0745da601c4cd4fa3e5d2.png"}  alt="twitter" className="avatar"  style={{width:'70px'}} /> 
    </div>
    <div className="card-body">
    <h3 className="card-title">{item.title}</h3>
        <p className="card-text">{item.description.slice(1,200)}.......</p>
        <button className="btn btn-primary" onClick={()=>getData(item.id)}>Read more</button>

    </div>
    </div>
    <br /><br /><br /> </>
  }) : <div className="spinner-border m-5" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
    
  }
<br /><br />
    </div>
  )
}
