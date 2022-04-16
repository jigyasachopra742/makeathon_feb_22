import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Service from './pages/Service';
import About from './pages/About';
import Contact from './pages/Contactt';

ReactDOM.render(
  <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Service" element={<Service />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contactt" element={<Contact/>} />
    
    </Routes>
   </BrowserRouter>,
  document.getElementById('root')
);


