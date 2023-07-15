import React from "react";
import { ChakraProvider } from '@chakra-ui/react'

import Navbar from './components/Navbar';
import Hero from "./components/Hero";

import './App.css'
import LanguageSection from "./components/Language-section";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";


const App = ()=>{
  // const date = new Date();
  // const time= date.getHours();
  // if(time>8 && time<20){
  //   document.body.style.backgroundColor="white";
  // }
  // else{
  //   document.body.style.backgroundColor="black";
  // }

    return <ChakraProvider>
      <Navbar />
      <Hero />
      <Education/>
      <Projects />
      <LanguageSection/>
      <Contact/>
    </ChakraProvider>

}

export default App;