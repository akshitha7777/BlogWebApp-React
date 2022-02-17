import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddBlog() {
    const [title, settitle] = useState("")
    const [desc, setdesc] = useState("")
    const navigate = useNavigate()
    const auth = localStorage.getItem("user")

    const addBlogs = (e)=>{
        e.preventDefault()
        console.log(title+ " "+ desc)
        axios.post("http://localhost:3001/blogs",{
        title : title,
        description : desc,
        userEmail : JSON.parse(auth).email,
        userName : JSON.parse(auth).username
    }).then((resp)=>{
        alert("Blog Added Successfully")
        navigate("/blogs")

    })
    }

  return (
    <div>
  <br />  <br />  <br />  <br />
<h1 style={{textAlign:'center'}}> Add a Blog </h1>

<div  style={{maxWidth: '60%', margin:'auto'}}><br />
    <form action="/postadded" method="post" style={{marginLeft: '10%' , marginRight: '20px'}} >
        <div className="mb-3">
          <label htmlFor="blogtitle" className="form-label">Blog Title</label>
          <input type="text" className="form-control" id="blogtitle" name="blogtitle" value={title} onChange={(e) => settitle(e.target.value)} />
        </div>
    <br />
 
        <div className="mb-3">
          <label htmlFor="content" className="form-label">Content</label>
          <textarea className="form-control" id="content" name="content" rows="10" value={desc} onChange={(e) => setdesc(e.target.value)}></textarea>
        </div>
        <br />

            <div className="d-grid gap-2">
                <input type="submit" className="btn btn-primary" value="Add Post" onClick={(e)=>addBlogs(e)} />
              </div>
            <br /><br />
            
    
    
    </form>
    </div>

    </div>
  )
}
