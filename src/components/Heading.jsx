import React from "react";

import Typewriter from 'typewriter-effect';

const Heading = () => {
    return <Typewriter
    options={{
      strings: ['Student', 'Web Developer', 'ML Enthusiast'],
      autoStart: true,
      loop: true,
      pauseFor: 2000
    }}
  />
}

export default Heading;