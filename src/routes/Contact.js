import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';
import ContactUs from '../components/ContactUs';
// import RyjImage3 from '../components/RyjImage';


const Contact = () => {
  return (
    <div>
      <Navbar />
      {/* <RyjImage3 heading="Contact Us"/> */}
      <ContactUs />
      <Footer />
      <Copyright />
    </div>
    
  )
}

export default Contact