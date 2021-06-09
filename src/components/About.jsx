import React from 'react'
import styled from 'styled-components';
import logo from '../images/download/icons/NA_HA_KU.png'

const AboutContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;
    
    
`

const AboutSection = styled.div`
    display: flex;
    width: 70%;
    height: 50%;
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    padding: 2rem;
    border-radius: 50px;
    

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
