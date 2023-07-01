import React from 'react';
import "./index.css";
import Home from "./Routes/Home";
import Service from "./Routes/Service";
import Contact from "./Routes/Contact";

import { Route, Routes} from "react-router-dom"


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/service" element={<Service />} />  
        <Route path="/contact" element={<Contact />} />  
      </Routes>  
    </>
  );
}

export default App;
