import React from 'react'
import styled from 'styled-components';
import logoF from '../images/download/icons/NA_HA_KU.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faEtsy, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons'

const FooterWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 3rem 0 0;
    img {
        width: 40%;
    }
    a {
        font-size: 3rem;
        padding: 0 2rem;
    }
    h4 {
        font-size: 4rem;
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
