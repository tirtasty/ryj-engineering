import "./NavbarStyles.css";

import { Link } from "react-router-dom";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logoImg from "../assets/ryjicon.png";



const Navbar = () => {

    const [click , setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >=100) {
            setColor(true);
        } else {
            setColor(false);
        }
    }

    window.addEventListener("scroll", changeColor);
     


  return (
    <div className={color ? "header header-bg" : "header"}>
        <Link className="subHeader" to="/">
            <img className="logo-Image" src={logoImg} alt="logoImage"/>
            <h1 className="headerLogo">RYJ</h1>
            
        </Link>
        {/* Sub Menu in Homepage */}
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/Service">Service</Link>
            </li>
            {/* <li>
                <Link to="/Project">Product</Link>
            </li> */}
            <li >
                <Link to="/Contact">Contact</Link>
            </li>
            <li>
          </li>

        </ul>

        {/* Hamburger Menu */}
        <div className="hamburger" onClick={handleClick}> 
            { click ? (
            <FaTimes size={20} style={{ color: "#fff" }}/>
            ) : (
            <FaBars size={20} style={{ color: "#fff" }}/>
            )}
        </div>


    </div>
  )
}

export default Navbar