import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {LinkContaner} from 'react-router-bootstrap';
import { NavLink } from 'react-router-dom';

function InnerNav() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {/* <h2>Hello</h2> */}
                    <img src="images/logo.png" alt="logo" style={{height:'50px'}}/>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            {/* <NavLink className="nav-link" to="/login">Login</NavLink> */}
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/cart">Cart</NavLink>
                        </li> 
                    </ul>
                </div>
            </nav>

            {/* <Navbar CollapseOnSelect bg="light" expand="lg" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto" >
                            <LinkContaner to="/login">
                                <Nav.Link>Login</Nav.Link>

                            </LinkContaner>
                            {/* <Nav.Link href="#action2">Link</Nav.Link> */}
                        {/* </Nav> */}
                    {/* </Navbar.Collapse> */}
                {/* </Container> */}
            {/* </Navbar> */}
        </div>
    )
}

export default InnerNav
