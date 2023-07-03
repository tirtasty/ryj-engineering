import React from 'react'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';
import RyjImg2 from '../components/RyjImg2';
import Services from '../components/ServiceList';


const Service = () => {
  return (
    <div>
      <Navbar />
      <RyjImg2 heading="SERVICES" text="Air Conditioning & Ventilation solution"/>
      <Services/>
      <Footer />
      <Copyright />
    </div>
  )
}

export default Service