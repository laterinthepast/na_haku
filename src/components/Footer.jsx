import React from 'react'
import styled from 'styled-components';
import logoF from '../images/download/icons/NA_HA_KU.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faEtsy, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons'

const FooterWrapper = styled.div`
    display: grid;
    grid-template-columns: 2fr 4fr 2fr;
    align-items: center;
    padding: 3rem 0 ;
    img {
        width: 40%;
    }
    a {
        font-size: 2rem;
        padding: 0 1rem;
    }
    h4 {
        font-size: 4rem;
    }
    @media screen and (max-width:1000px){

    }
`


const Footer = () => {
    return (
        <FooterWrapper>
            <div>
                <img src={logoF} alt="logo" />
            </div>
            <h4>na_ha_ku@gmail.com</h4>
            <div>
                <a href="/"><FontAwesomeIcon icon={faEtsy} /></a>
                <a href="/"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="/"><FontAwesomeIcon icon={faPinterest} /></a>
            </div>
        </FooterWrapper>
    )
}

export default Footer
