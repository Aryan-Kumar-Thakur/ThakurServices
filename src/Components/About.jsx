import React from "react";
import web from "../images/img2.jpg"
import Common from "./Common";

const About = ()=>{
    return(
        <>
            <Common
                name='Welcome to About page'
                imgsrc={web}
                visit='/contact'
                btname="Contact Us"
            />
        </>
    )
}

export default About