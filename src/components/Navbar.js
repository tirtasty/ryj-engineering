import "./NavbarStyles.css";

import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="header">
        <Link to="/">
            <h1 id="headerLogo">RYJ</h1>
        </Link>
        {/* Sub Menu in Homepage */}
        <ul className="nav-menu">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/Service">Service</Link>
            </li>
            <li>
                <Link to="/Project">Project</Link>
            </li>
            <li>
                <Link to="/Contact">Contact</Link>
            </li>
        </ul>

    </div>
  )
}

export default Navbar