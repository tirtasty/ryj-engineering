import "./RyjImgStyles.css";

import React from 'react'
import backgroundImg from "../assets/aircondback.jpg";
import { Link } from "react-router-dom";



const RyjImg = () => {
  return (
    <div className="ryj">
        <div className="mask">
            <img className="intro-img" src={backgroundImg} alt="backgroundImage" />
        </div>
        <div className="content">
            <p>RYJ Engineering</p>
            <h1 id="introWords" >AIR CONDITIONING | VENTILATION SOLUTIONS</h1>
            <div>
                <Link to="/service" className="btn">Services</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
            <p className="local">Sydney,   NSW</p>


        </div>

    </div>
  )
}

export default RyjImg;