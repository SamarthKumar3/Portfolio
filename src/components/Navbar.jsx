import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'


import './Navbar.css';

const Navbar = () => {
  

  const Lscroll = () => {
    const section = document.querySelector( '#Languages' );
    section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  };

  const Pscroll = () => {
    const section = document.querySelector( '#Projects' );
    section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  };

  const Escroll = () => {
    const section = document.querySelector( '#Education' );
    section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  };

  return (
    <Breadcrumb spacing='2vw' separator='' fontSize='1.75vw' >
    <BreadcrumbItem >
        <BreadcrumbLink onClick={Escroll}>Education</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink onClick={Pscroll}>Projects</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink onClick={Lscroll} >Languages</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}

export default Navbar;