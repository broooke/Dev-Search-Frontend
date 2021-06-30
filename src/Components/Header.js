import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

function Header() {
    return (
        <div>
            <Navbar style={{background: '#2D2D39'}} variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
