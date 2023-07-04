import "./RyjImage3Style.css";

import React, { Component } from'react'

class RyjImage3Style extends Component {
    render() {
        return (
            <div className="Ryj3-Img">
                <div className="heading">
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
        
                </div>
        
            </div>
          )
    }
}

export default RyjImage3Style