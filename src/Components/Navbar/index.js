import React from 'react';
import {NavLink} from 'react-router-dom';
import './style.css';

const Navbar = (props) => {

  return (
    <div className="navbar">
        <ul className="navbarMenu">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/contact-us">Contactus</NavLink></li>
            <li><NavLink to="/about-us">About us</NavLink></li>
            
        </ul>
        <a className="search">
                <input src={require("../../assets/icons/search.png")}type="text" className="searchinput" placeholder="search"></input>
                <img  alt="search" className="searchicon"/>   
        </a>
    </div>

  )
}



export default Navbar