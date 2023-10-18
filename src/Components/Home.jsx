import React from "react";
import web from "../images/img1.jpg"
import Common from "./Common";

const Home = () => {
    return (
        <>
            <Common 
                name='Grow your Business With '
                imgsrc={web}
                visit='/service'
                btname="Get Started"
            />
        </>
    )
}

export default Home