import React  from "react";
import Languages from "./Languages";

import { Code , Link, Text} from '@chakra-ui/react'

import './Language-section.css';

const LanguageSection = () => {
    
    return <div className="tp-margin" id="Languages">
        <div className="lg-head">
            <h1>Languages known</h1>
        </div>
        <div className="lg-hint">
            <Code colorScheme='red' children="Google doubles my skills ><" />
        </div>
        <Languages />
        <div>
            <Text>
                View my certificates{' '}
                <Link color='teal.500' href='https://drive.google.com/drive/folders/1JeaZILhN2RM0OBt9CiIG-0QAaxdP2GXs?usp=drive_link'>
                   here
                </Link>
            </Text>
        </div>
    </div>

}

export default LanguageSection;