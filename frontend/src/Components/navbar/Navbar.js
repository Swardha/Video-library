import React, { useEffect } from "react";
import "./navbar.css";
import { Navigate, NavLink } from "react-router-dom";

const Navbar = () => {
  const auth = localStorage.getItem("authToken");
  const logout = () => {
    localStorage.clear();
    Navigate("/signup");
  };

  return (
    <div className="header">
      <nav className="open" >
        <div >
       
         
            {auth ? (
              <ul className="nav-ul">
                <li className="nav-li">
                  <NavLink className="nav-link " aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-li">
                  <NavLink className="nav-link " aria-current="page" to="/like">
                    Like
                  </NavLink>
                </li>

                <li className="nav-li">
                  <NavLink
                    className="nav-link "
                    aria-current="page"
                    to="/video"
                  ></NavLink>
                </li>
                <li className="nav-li">
                  <NavLink className="item" onClick={logout} to="/logout">
                    logout{" "}
                  </NavLink>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="item" to="/signup">
                    Signup
                  </NavLink>
                </li>

                <li className="nav-li">
                  <NavLink
                    to="/login"
                    className="item"
                    tabIndex="-1"
                    aria-disabled="true"
                  >
                    Login
                  </NavLink>
                </li>
              </ul>
            )}
        
        </div>
      </nav>

      <button className="menu-btn"><i class="fa-solid fa-bars"></i></button>
    </div>
  );
};

export default Navbar;
