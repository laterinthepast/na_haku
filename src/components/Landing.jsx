import React from 'react'
import styled from 'styled-components'
import logo from '../images/download/icons/NA_HA_KU.png'
import welcomeJPG from '../images/download/welcome.jpg'


const Welcome = styled.div`
    display:grid;
    grid-template-columns: minmax(300px, 1fr) minmax(300px, 1fr);
    height: 100vh;
    .logo-img, .welcome-img {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        img {
        width: 40%;
        }
    }
    .welcome-img {
    justify-content: flex-start;
    img {
       box-shadow: rgba(0, 0, 0, 0.35) 5px 10px 20px; 
        }
    }
`


const Landing = () => {
    return (
        
            <Welcome>
                <div className="logo-img">
                    <img src={logo} alt="Welcome" />
                </div>
                <div className="welcome-img">
                    <img src={welcomeJPG} alt="Welcome" />
                </div>
            </Welcome>
            
    )
}

export default Landing
export {logo}
