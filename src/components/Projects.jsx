import React from "react";

import Project1 from '../Images/Project1.png';
import Project2 from '../Images/Project2 (3).png';
import Project3 from '../Images/Project3.png';
import Project4 from '../Images/Project4.png';
import Project5 from '../Images/Project5.png';
import Project6 from '../Images/Project6.png';
import Project7 from '../Images/Project7.png';

import './Projects.css';

const Projects = () => {
    return <div id="Projects" className="tp-margin">
        <h1 className="center">Projects </h1>
        <div class="parent">
            <div class="div1">
                <img src={Project1} alt="4ze Racing" />
            </div>
            <div class="div2">
                <img src={Project2} alt="Tincat: Fictional dating site for cats" />
            </div>
            <div class="div3">
                <img src={Project3} alt="Himankind.art UI Clone" />
            </div>
            <div class="div4">
                <img src={Project4} alt="Company Budget allocation made using React and state management done by useContext" />
            </div>
            <div class="div5">
                <img src={Project5} alt="React To-Do list" />
            </div>
            <div class="div6">
                <img src={Project6} alt="Globe-rater: MERN Stack app to review places visited by users" />
            </div>
            <div class="div7">
                <img src={Project7} alt="JavaScript Drumkit that plays different drum sounds" />
            </div>
        </div>
    </div>
}

export default Projects;