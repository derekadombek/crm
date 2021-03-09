import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import logo from '../../assets/img/crm-logo.png'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export const Header = () => {
    return (
        <Navbar collapseOnSelect expand="md" variant="dark">
            <Navbar.Brand>
                <img src={logo} alt="logo" width="50px"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span>
                    <FontAwesomeIcon icon={faBars} color="white"/>
                </span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Nav.Link className="navLinks" href="/dashboard">Dashboard</Nav.Link>
                    <Nav.Link className="navLinks" href="/Tickets">Tickets</Nav.Link>
                </Nav>
                <Nav className="ml-auto">
                    <Nav.Link className="navLinks" href="/Logout">Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
