import React, { Component } from 'react'
import styled from 'styled-components'
import '../styles/styles.css'



const Wrapper = styled.div`
    font-size: 2rem;
    width: 100%;
    padding: 0 10rem;
    

`
const Navbar = styled.div`
    
`

const Links = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    @media screen and (max-width: 990px) {
    display: none;
  }

    
`

const NavLink = styled.div`
    
    a {
        font-weight: bold;
        font-size: 2.2rem;
        text-decoration: none;
        transition: all 0.25s ease-in;
        &:hover {
            color: ;
            text-shadow: 0.2px 0.2px #023047;
        }
    }
    padding: 0.5rem;
    @media screen and (min-width: 990px) {
    
  }
    
`


const HamburgerMenu = styled.div`
    .hamburger-react {
      @media screen and (min-width:990px){
        display: none;
      }
      
    }
      position:absolute;
      right: 20px;
      top: 20px;
`





const Navigation = () => {



  return (
    <Wrapper>
      <Navbar>
        <Links className="hide-for-mobile">
          <NavLink ><a href="#about" >o mnie</a></NavLink>
          <NavLink ><a href="#products" >produkty</a></NavLink>
          <NavLink ><a href="#contact" >kontakt</a></NavLink>
        </Links>
        <HamburgerMenu className="">

        </HamburgerMenu>


      </Navbar>
    </Wrapper>
  )
}
export default Navigation

