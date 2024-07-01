// 
import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='nav-list'>
        <li className='nav-item left'>
          <Link to="/home" className="nav-link">Home</Link>
        </li>
        <li className='nav-item right'>
          <Link to="/status" className="nav-link">Status</Link>
        </li>
        <li className='nav-item right'>
          <Link to="/admin" className="nav-link">Admin</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
