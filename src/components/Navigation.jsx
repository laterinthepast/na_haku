import React from 'react'
import styled from 'styled-components'



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
    
`

const NavLink = styled.div`
    a {
        text-decoration: none;
    }
    padding: 1rem;
    
`

const Navigation = () => {


    return (
        <Wrapper>
            <Navbar>
                <Links>
                    <NavLink > <a href="#about">o mnie</a></NavLink>
                    <NavLink > <a href="#products">produkty</a></NavLink>
                    <NavLink > <a href="#contact">kontakt</a></NavLink>
                </Links>
            </Navbar>
        </Wrapper>
    )
}

export default Navigation
