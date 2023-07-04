import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';
import ContactUs from '../components/ContactUs';
import RyjImg2 from '../components/RyjImg2';


const Contact = () => {
  return (
    <div>
      <Navbar />
      <RyjImg2 heading="Contact Us"/>
      <ContactUs />
      <Footer />
      <Copyright />
    </div>
    
  )
}

export default Contact