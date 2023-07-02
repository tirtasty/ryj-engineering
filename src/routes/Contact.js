import React from 'react';
import { Link } from "react-router-dom";


const Contact = () => {
  return (
    <div>Contact
  
      <ul>
        <li>
          {/* This fuction is go back to homepage */}
          <Link to="/">Home</Link> 
          
        </li>
      </ul>
    </div>
    
  )
}

export default Contact