import "./ContactUs.css";

import React from 'react'

const ContactUs = () => {
  return (
    <div className="form">
        <label>Your Name</label>
        <input type="text" ></input>

        <label>Email</label>
        <input type="email"></input>

        <label>Subject</label>
        <input type="text"></input>

        <label>Message</label>
        <textarea row="6" placeholder="Type Here"/>

        <button className="btn">Submit</button>

    </div>
  )
}

export default ContactUs