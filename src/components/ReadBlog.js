import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ReadBlog() {
    const {id} = useParams()
    const [blog, setblog] = useState("")

    useEffect(()=>{
        axios.get(`http://localhost:3001/blogs/${id}`).then(({data})=>{
        setblog(data)
        console.log(data)
    })
},[])

  return (
    <div className='container' style={{  maxWidth:'50%' ,margin: 'auto' }}>
        <br /><br />  <br />  <br />  <br />
        <div className="card">
        <div className="card-header" style={{fontSize:'20px', fontWeight:'bold'}}>
          <img src={"https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584__340.png"}  alt="Avatar" className="avatar" />  {blog.userName}
          <img src={"https://i.pinimg.com/originals/65/a5/c7/65a5c7139bf0745da601c4cd4fa3e5d2.png"}  alt="twitter" className="avatar" style={{width:'70px'}}  /> 
      </div>
    <div className="card-body">
    <h3 className="card-title">{blog.title}</h3>
        <p className="card-text">{blog.description}</p>
    </div>
    </div>

    </div>
  )
}
