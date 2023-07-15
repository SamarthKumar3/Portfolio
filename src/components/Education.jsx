import React, { useState } from "react";
import School from '../Images/ryangrnoida(2).jpg';
import School1 from '../Images/ryangrnoida(3).jpg';
import SRM from '../Images/srmuniv.jpeg';

import { Link, Text } from '@chakra-ui/react'

import './Education.css';

const Education = () => {
    const [selectedImage, setSelectedImage] = useState(SRM);

    const images = [
        {
            src: SRM, text: <Text>
                <Link color='blue.500' href='https://www.srmist.edu.in/'>
                    SRM University
                </Link>
            </Text>
        },
        {
            src: School, text: <Text>
                <Link color='blue.500' href='https://www.ryangroup.org/ryaninternational/cbse/noida/ryan-international-school-greater-noida'>
                    Ryan International School Greater Noida
                </Link>
            </Text>
        },
        {
            src: School1, text: <Text>
                <Link color='blue.500' href='https://www.ryangroup.org/ryaninternational/cbse/noida/ryan-international-school-greater-noida'>
                    Ryan International School Greater Noida
                </Link>
            </Text>
        },
    ];


    const handleImageClick = (image) => {
        setSelectedImage(image);
    };


    return <div id="Education" className="tp-margin">
        <div className="lg-head">
            <h1 >Education</h1>
        </div>
        <div>
            <div className="Eparent">
                <div className="img-div">
                    {images.map((image, index) => (
                        <div key={index}>
                            <img
                                src={image.src}
                                onClick={() => handleImageClick(image.src)}
                                className={selectedImage === image.src ? 'selected' : ''}
                                alt="education"
                            />
                            <p style={{ marginTop: "1vw" }}>{image.text}</p>
                        </div>
                    ))}
                </div>

                <div className="div12">
                    <img src={selectedImage} alt="I studied here!" />
                    {selectedImage === School ?
                        <div><h4 className="ed-bottom2">High School</h4><p className="ed-txt">I successfully completed my high school education under the CBSE boards, achieving an outstanding academic accomplishment with a remarkable score of 97%.</p></div> :
                        selectedImage === School1 ?
                            <div><h4 className="ed-bottom2">Middle School</h4><p className="ed-txt">I successfully completed the CBSE boards examinations for middle school, earning a commendable score of 96%.</p></div> :
                            selectedImage === SRM ?
                                <div><h4 className="ed-bottom">B.Tech</h4><p className="ed-txt">I am currently enrolled in my 5th semester at SRM University, Kattankulathur, maintaining an average CGPA of 9.83.</p></div> : ''}
                </div>
            </div>
        </div>
    </div>
}

export default Education;