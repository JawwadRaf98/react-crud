import React from 'react';
import {Link} from 'react-router-dom'


const Header = () =>{
    return(
        <nav className="navbar  navbar-expand-lg navbar-dark bg-primary">
        <Link className="navbar-brand pl-4" href="/">Crud Application</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav " >
            <li className="nav-item ">
              <Link to="/" className="nav-link active" >Home </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" >About</Link>
            </li>
            <li className="nav-item">
              <Link o="/contact" className="nav-link" t>Contact</Link>
            </li>
          
          </ul>
        </div>
      </nav>
    )
}

export default Header;