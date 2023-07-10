import "./ContactUs.css";

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {

    // This fuction is using to receive email from contact form.
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kgy16xd', 'template_q0rnoyq', form.current, 'BOst5uiB17E461MnV')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  

  return (
    <form ref={form} onSubmit={sendEmail}>
    <div className="form">
        <label>Name</label>
        <input type="text" name="user_name"></input>

        <label>Email</label>
        <input type="email" name="user_email"></input>

        <label>Phone Number</label>
        <input type="number" name="phone_number"></input>

        <label>Message</label>
        <textarea name="message" row="6" placeholder="Put your inqury here"/>

        <button type="submit" value="Send" className="btn">Submit</button>

    </div>
    </form>
  )
}

export default ContactUs