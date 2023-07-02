import "./RyjImgStyles.css";

import React from 'react'
import backgroundImg from "../assets/background.jpg";
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
            <h2>Sydney, NSW</h2>
            <div>
                <Link to="/project" className="btn"></Link>
                <Link to="/contact" className="btn btn-light"></Link>
            </div>


        </div>

    </div>
  )
}

export default RyjImg;