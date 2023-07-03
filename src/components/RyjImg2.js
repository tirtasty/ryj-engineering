import "./RyjImg2.css";

import React, { Component } from'react'

class RyjImg2 extends Component {
    render() {
        return (
            <div className="Ryj-Img">
                <div className="heading">
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
        
                </div>
        
            </div>
          )
    }
}

export default RyjImg2