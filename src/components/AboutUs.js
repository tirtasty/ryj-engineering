import "./AboutUs.css";

import React, { Component} from 'react'


class AboutUs extends Component {
    render () {
        return (
            <div className="About-Us">
                <div className="heading">
                            <h1>{this.props.heading}</h1>
                            <p>{this.props.text}</p>
                
                        </div>
        
            </div>
          )
    }

  
}

export default AboutUs
