import React, { useEffect } from 'react'
import { Navigate, NavLink } from 'react-router-dom'

const Navbar = () => {
  const auth = localStorage.getItem('authToken')
  const logout=()=>{
localStorage.clear()
Navigate('/signup')
  }

  return (
    <div>
<nav className="navbar navbar-expand-lg navbar-dark bg-black">
  <div className="container-fluid">
    {/* <NavLink className="navbar-brand" to="">Video</NavLink> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">

      {
        auth?
      
      <ul className="navbar-nav">

<li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/like">Like</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/video"></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" onClick={logout} to="/logout">logout </NavLink>
         
        </li>
        </ul> : 
      
      <ul className="navbar-nav">
          <li className="nav-item">
        <NavLink className="nav-link" to="/signup">Signup</NavLink>
        </li>
       
        <li className="nav-item">
          <NavLink  to="/login" className="nav-link disable" tabIndex="-1" aria-disabled="true">Login</NavLink>
        </li>
      </ul>
      
  
}
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar

