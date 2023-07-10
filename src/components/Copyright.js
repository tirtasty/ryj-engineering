import "./Copyright.css";

import React from 'react';

import { FaCopyright} from "react-icons/fa";


const Copyright = () => {

    

    // const handleClick = () => {
    //     window.location.href = `mailto:${website}`;
    //   };

  return (
    <div className="copyright">
        <div className="copyright-container">
            <div className="left">
                <div className="lefy-copy">
                    <p className="copyright-left">
                        <FaCopyright size={10} style={{color: 'white', marginRight: "0.5rem" }}/>
                        RYJ Engineering Group. All rights reserved.
                    </p>
                </div>
            </div>
            <div className="rightCopy">
                <div className="brandMaker">
                <p className="copyright-left">
                    Website, graphics Design, by <a href="https://tirtastyadi.com.au" target="_blank" rel="noopener noreferrer">Tirta Styadi</a>
                    </p>
                       
                </div>

            </div>

            

        </div>
    </div>
  )
}

export default Copyright