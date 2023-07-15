import React from "react";
import Heading from "./Heading";

import About from "./About";
import "./Hero.css";

const Hero = () => {
    return <div className="top-margin">
        <div className="center">
            <h1 >Hi! I'm Samarth a &nbsp;</h1><Heading className="Monster"/>
        </div>
        <div className="About-me">
            <About />
        </div>
    </div>



}

export default Hero;