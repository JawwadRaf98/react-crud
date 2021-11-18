import React from 'react';
import { NavLink } from 'react-router-dom'


const Header = () => {
  return (
    <nav className="pl-4   navbar navbar-expand-lg navbar-dark bg-primary">
      <NavLink to="/" className="navbar-brand pl-4" >CRUD Application</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span Name="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse mr-auto" id="navbarNav">
        <ul className="navbar-nav ">
          <li className="nav-item active">
            <NavLink className="nav-link" active to="/home">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
          </li>

        </ul>
      </div>
    </nav>
  )
}

export default Header;