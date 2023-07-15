import React from "react";
import { Progress, Tooltip } from '@chakra-ui/react'

import "./Languages.css";

const Languages = () => {
    return <div className="bars">
        <div className="barsdiv">
            <Progress value={95} />
            <h3>HTML</h3>
        </div>
        <div className="barsdiv">
            <Progress value={95} />
            <h3>CSS</h3>
        </div>
        <div className="barsdiv">
            <Progress value={80} />
            <h3>JavaScript</h3>
        </div>
        <div className="barsdiv">
            <Progress value={70} />
            <h3>React</h3>
        </div>
        <div className="barsdiv">
            <Tooltip label="Learning phase!" aria-label='A tooltip'>
                <Progress value={20} />
            </Tooltip>
            <h3>Next.js</h3>
        </div>
        <div className="barsdiv">
            <Progress value={70} />
            <h3>Node.js & Express.js</h3>
        </div>
        <div className="barsdiv">
            <Progress value={70} />
            <h3>MongoDB</h3>
        </div>
        <div className="barsdiv">
            <Progress value={70} />
            <h3>SQL</h3>
        </div>
        <div className="barsdiv">
            <Progress value={50} />
            <h3>Google cloud</h3>
        </div>
        <div className="barsdiv">
            <Tooltip label="Learning phase!" aria-label='A tooltip'>
                <Progress value={10} />
            </Tooltip>

            <h3>R</h3>
        </div>
        <div className="barsdiv">
            <Progress value={30} />
            <h3>Python</h3>
        </div>
        <div className="barsdiv">
            <Progress value={70} />
            <h3>C++</h3>
        </div>
    </div>

}

export default Languages;