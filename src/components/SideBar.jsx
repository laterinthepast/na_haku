import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import { faEtsy, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons'



const SidebarLeft = styled.div`
    position: fixed;
    width: 4rem;
    height: 100%;
    display: flex;
    align-items: center;
`
const SidebarLinks = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    font-size: 2rem;
    
    .side-link {
        padding: 1rem;
    }
    
`

const SideBar = () => {
    return (
        <SidebarLeft>
            <SidebarLinks>
                <div className="side-link">
                    <a href="/"><FontAwesomeIcon icon={faEtsy} /></a>
                </div>
                <div className="side-link">
                    <a href="/"><FontAwesomeIcon icon={faInstagram} /></a>
                </div>
                <div className="side-link">
                    <a href="/"><FontAwesomeIcon icon={faPinterest} /></a>
                </div>
            </SidebarLinks>
        </SidebarLeft>
    )
}

export default SideBar
