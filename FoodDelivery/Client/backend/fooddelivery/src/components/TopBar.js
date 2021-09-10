import React from 'react'
// import { Navbar, Nav, Container } from 'react-bootstrap';
// import {LinkContaner} from "react-router-bootstrap";
import { NavLink } from 'react-router-dom';

function TopBar(){
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" exact to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link" to="/policy">Terms & Policy</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* <Navbar bg="dark" varient="dark" expand="lg">
                <Container fluid>
                    <h6>Free Home Delivery on Order Above 500/- Rs</h6>
                     <Nav className="ms-auto">
                     <NavLink className="nav-link" exact to="/">Home</NavLink>
                            <LinkContaner to="/">
                            <NavLink>Home</NavLink>
                            <h1>Hello</h1>
                         </LinkContaner> 
                        <LinkContaner to="/about">
                            <NavLink>About</NavLink>
                        </LinkContaner>
                        <LinkContaner to="/contact">
                            <NavLink>Contact</NavLink>
                        </LinkContaner>
                        <LinkContaner to="/policy">
                            <NavLink>Terms & Policy</NavLink>
                        </LinkContaner>  
                     </Nav>  
                </Container>
            </Navbar>   */}
             {/* <h1>Hello</h1> */}
        </div>
    )
}

export default TopBar;


//type rface