import "./Footer.css";

import React from 'react';

import { FaMailBulk, FaPhone} from "react-icons/fa";
import logoImg from "../assets/ryjicon.png";

const Footer = () => {

    const email = "rb@ryjengineering.com.au"

    const handleClick = () => {
        window.location.href = `mailto:${email}`;
      };

  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="footerGroup">
                    <img className="logo-Image" src={logoImg} alt="logoImage" />
                    <h1 className="headerLogo">RYJ Group</h1>
                </div>
            </div>
            <div className="right">
                <div className="phone">
                    <h4><FaPhone size={20} style={{color: 'white', marginRight: "2rem"}}/>
                    <a href="tel:+61451933855">+61 430 031 289</a>
                    </h4>
                </div>
                <div className="email">
                    <h4> 
                        <a href={`mailto:${email}`} onClick={handleClick}>
                        <FaMailBulk size={20} style={{color: 'white', marginRight: "2rem"}}/>
                    rb@ryjengineering.com.au  </a>
                    </h4>
                       
                </div>

            </div>

            

        </div>
    </div>
  )
}

export default Footer