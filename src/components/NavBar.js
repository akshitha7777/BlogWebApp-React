import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function NavBar() {


    let auth = localStorage.getItem("user")
    const navigate = useNavigate()

    const logoutUser = (e)=>{
      e.preventDefault()
      localStorage.clear("user")
      navigate('/')
    }

  return (
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        {
          auth ? 
          <>
          <li className="nav-item">
            <Link className="nav-link" to="/blogs">Home</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/addblog">Create Blog</Link>
          </li>
      <li className="nav-item">
          <Link className="nav-link" to="/" onClick={(e)=>logoutUser(e)}>Logout</Link>
      </li> 
      
      <li className="nav-item">
          <p className="nav-link" > Welcome ( {JSON.parse(auth).username} )</p>
      </li> 

       </>
      : 
      <>  
      
      <li className="nav-item">
          <Link className="nav-link active" to="/">Home</Link>
        </li>
      
      <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/signup">Signup</Link>
        </li>
        </>
        }
        
        
      
      </ul>
      
    </div>
  </div>

</nav>

  )
}
