import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { Navigate, Route, Routes } from "react-router-dom";

//Importing components
import Navbar from "./Navbar";
import Home from "./Home";
import Service from "./Service";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

const App = ()=>{
    return (
        <>
        <Navbar/>
        <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/service" element={<Service/>}></Route>
            <Route exact path="/about" element={<About/>}></Route>
            <Route exact path="/contact" element={<Contact/>}></Route>
            <Route exact path="/*" element={<Navigate to="/"/>}></Route>
        </Routes>
        <Footer/>
        </>
    )
}

export default App;