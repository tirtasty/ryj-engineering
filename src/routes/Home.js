import React from 'react'
import Navbar from '../components/Navbar';
import RyjImg from '../components/RyjImg';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';
import AboutUs from '../components/AboutUs';


const Home = () => {
  return (
    <div>
        <Navbar/>
        <RyjImg />
        <AboutUs heading="ABOUT US" text="RYJ Engineering offers a comprehensive Air Conditioning & Ventilation solution to homeowners, architects, builders, and developers, 
        servicing full extent of the project from estimation, design, procurement to installation."/>
        {/* <ContactUs /> */}
        <Footer />
        <Copyright />
        
    </div>
  )
}

export default Home

