import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap';




export class MobileMenu extends Component {

    state = {
        show: true
    }

    render() {
        return (
            
            <div className="item-container">
                <section className="name-container">
                    {this.props.name}
                </section>
                <section className="container">
                    <div onClick={() => this.setState({show: !this.state.show})}
                        className={(this.state.show) ? "hamburger" : "hamburger active"}>
                            <span className="line line-1"></span>
                            <span className="line line-2"></span>
                            <span className="line line-3"></span>
                    </div>

                </section>
                <div className="modal">
                    
                </div>
            </div> 
            
        );
    }

}

export default MobileMenu