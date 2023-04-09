import React from 'react'
//import { Link } from 'react-router-dom';
//import ReorderIcon from '@mui/icons-material/Reorder';
import './styles/Navbar.css';
import Logo from './ecom.png';

function Navbar() {
  return (
    <div className="navbar">
    <img src={Logo} />  
    </div>
  )
}

export default Navbar;