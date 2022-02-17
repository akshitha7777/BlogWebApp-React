import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function UpdateBlog() {
    const [title, settitle] = useState("")
    const [desc, setdesc] = useState("")
    const navigate = useNavigate()
    const auth = localStorage.getItem("user")
    const {id} = useParams()
    const email = JSON.parse(auth).email

    useEffect(()=>{
        axios.get(`http://localhost:3001/blogs/${id}`).then(({data})=>{
        settitle(data.title)
        setdesc(data.description)
    })
},[])

    const updateBlog = (e)=>{
        e.preventDefault()
        console.log(title+ " "+ desc + " "+ email)
        axios.put(`http://localhost:3001/blogs/${id}`,{
            title : title,
            description: desc,
            userEmail : email
        }).then((resp)=>{
            alert("Blog Updated Successfully")
            navigate("/blogs")
        }).catch((err)=>{
            console.log(err)

    })
    }

  return (
    <div>
  <br />  <br />  <br />  <br />
<h1 style={{textAlign:'center'}}> Update a Blog </h1>

<div  style={{maxWidth: '60%', margin:'auto'}}><br />
    <form action="/postadded" method="post" style={{marginLeft: '10%' , marginRight: '20px'}} >
        <div className="mb-3">
          <label htmlFor="blogtitle" className="form-label">BLOG TITLE</label>
          <input type="text" className="form-control" id="blogtitle" name="blogtitle" value={title} onChange={(e) => settitle(e.target.value)} />
        </div>
    <br />
 
        <div className="mb-3">
          <label htmlFor="content" className="form-label">CONTENT</label>
          <textarea className="form-control" id="content" name="content" rows="10" value={desc} onChange={(e) => setdesc(e.target.value)}></textarea>
        </div>
        <br />

            <div className="d-grid gap-2">
                <input type="submit" className="btn btn-primary" value="Update Blog"  onClick={(e)=>updateBlog(e)}/>
              </div>
            <br /><br />
            
    
    
    </form>
    </div>


    </div>
  )
}
