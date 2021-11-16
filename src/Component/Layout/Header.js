import React from 'react';
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link to="/" class="navbar-brand" >CRUD Application</Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav navbar-dark">
          <li class="nav-item active">
            <Link class="nav-link" to="/home">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/about">About</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/contact">Contact</Link>
          </li>

        </ul>
      </div>
    </nav>
  )
}

export default Header;