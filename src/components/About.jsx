import React from 'react'
import styled from 'styled-components';
import logo from '../images/download/icons/NA_HA_KU.png'

const AboutContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;  
    @media screen and (max-width: 990px){
        justify-content: flex-end;
        padding: 5rem 3rem 5rem 3rem;

    }
   
`

const AboutSection = styled.div`
    display:grid;
    grid-template-columns: 30% 70%;
    width: 70%;
    height: 50%;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding: 2rem;
    border-radius: 50px;
    @media screen and (max-width: 990px){
        display:flex;
        flex-direction: column;
        width: 100%;
        img {
            display: none;
        }
        padding: 1rem;
        
    }

`
const AboutLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 100%;
    } 
`

const AboutText = styled.div`
    font-size: 2rem;   
    @media screen and (max-width: 990px){
        font-size: 1rem;
        
    }
`

const About = () => {
    return (
        <AboutContainer>
            <AboutSection >
                <AboutLogo>
                    <img src={logo} alt="About" />
                </AboutLogo>
                <AboutText className="aboutSection">
                    <h2>o mnie</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially</p>
                </AboutText>
            </AboutSection>

        </AboutContainer>
    )
}

export default About
