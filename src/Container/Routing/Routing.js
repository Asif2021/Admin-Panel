import React from 'react'
import {Routes, Route } from "react-router-dom";
import Home from '../Pages/Home'
import Contact from '../Pages/Contact'
import Products from '../Pages/Products';
import MajorProjects from '../Pages/MajorProjects';
import Partners from '../Pages/Partners';
import ServicesSupport from '../Pages/ServicesSupport';
import AboutUs from '../Pages/AboutUs';

const Routing = () => {
    return (
        <div>
        
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/products" element={<Products/>}/>
        <Route exact path="/majorprojects" element={<MajorProjects/>}/>
        <Route exact path="/partner" element={<Partners/>}/>
        <Route exact path="/services" element={<ServicesSupport/>}/>
        <Route exact path="/aboutus" element={<AboutUs/>}/>

        </Routes>
        </div>
    )
}

export default Routing
