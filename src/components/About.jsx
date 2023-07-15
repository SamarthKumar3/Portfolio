import React from "react";
import { Card, CardBody, Highlight } from '@chakra-ui/react'

import "./About.css";

const About = () => {
    return <Card>
        <CardBody>
            <Highlight
                query='front-end technologies'
                styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}
            >
                I'm an enthusiastic undergraduate student with a real knack for coding and building awesome websites.
                I'm proficient in front-end technologies and continuously upskilling.
                My aim is to craft websites that are not only visually captivating but also incredibly user-friendly.&nbsp;
            </Highlight>
            <Highlight
                query='full stack developer'
                styles={{ px: '2', py: '1', rounded: 'full', bg: 'yellow.100' }}
            >
                My ultimate goal is to become a full stack developer, and I'm super excited about it!
            </Highlight>
        </CardBody>
    </Card>


}

export default About;