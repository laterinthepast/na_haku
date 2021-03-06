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