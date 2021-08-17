import React from 'react'
import styled from 'styled-components'
import '../styles/styles.css'



const Wrapper = styled.div`
    font-size: 2rem;
    width: 100%;
    padding: 0 10rem;
`
const Navbar = styled.div`
    position: absolute;
    right: 20px;
    @media screen and (max-width: 990px) {
    display: none;
  }
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
    border: 1px solid #000;
    margin-right: 1rem;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    
    a {
        
        font-weight: bold;
        font-size: 2rem;
        text-decoration: none;
        text-align: center;
        transition: all 1s ease-in-out;
        &:hover {    

            text-shadow: 0.2px 0.2px #023047;
            position:initial;
        }
        
    }
    padding: 0.5rem;
    @media screen and (min-width: 990px) {
  }
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
      </Navbar>
    </Wrapper>
  )
}
export default Navigation
