import React, { Component } from 'react'
import styled from 'styled-components';



const MobileContainer = styled.div`
        @media screen and (min-width: 990px) {
        display: none;
  }
          
    
    
`



export class MobileMenu extends Component {

    state = {
        show: true
    }

    


    render() {
        return (

            <MobileContainer>
                <section className="name-container">
                    {this.props.name}
                </section>
                <section className="container">
                    <div onClick={() => this.setState({ show: !this.state.show })}
                        className={(this.state.show) ? "hamburger" : "hamburger active"}>
                        <span className="line line-1"></span>
                        <span className="line line-2"></span>
                        <span className="line line-3"></span>
                    </div>

                </section>
                <div className="modal">

                </div>
            </MobileContainer>

        );
    }

}

export default MobileMenu

/* 
import React, { useState } from 'react'
import './styles/Navbar.scss';

function Navbar() {
    const [click, setClick] = useState(false);
    const [navbar, setNavbar] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const changeBackground = () => {
        if (window.scrollY >= 400) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }
    window.addEventListener('scroll', changeBackground);
    return (
        <>
            <nav className={navbar ? 'navbar active' : 'navbar'}>
                <div className="navbar-container">
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <a href="#welcome" className='nav-links' onClick={closeMobileMenu}>
                                home<span className="dots">.</span>
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href="#about" className='nav-links' onClick={closeMobileMenu}>
                                about<span className="dots">.</span>
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href="#projects" className='nav-links' onClick={closeMobileMenu}>
                                projects<span className="dots">.</span>
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href="#contact" className='nav-links' onClick={closeMobileMenu}>
                                contact<span className="dots">.</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar */