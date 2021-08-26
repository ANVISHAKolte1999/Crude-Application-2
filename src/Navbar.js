import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logout from './Component/Logout';
import Task from './Component/Task';
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/home">
                Sign In
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/signoff">
                SignOff
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/user">
                User
              </NavLink>
            </li>
          </ul>
        </div>
        
        <Logout></Logout>
      </div>
    </nav>
  );
};

export default Navbar;