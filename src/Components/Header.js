import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
    return (
        <div>
            <Navbar style={{background: '#2D2D39'}} variant="dark">
                <Container>
                    <Navbar.Brand href="/">Navbar</Navbar.Brand>
                    <Nav className="ml-auto">
                        <LinkContainer exact to={'/'}>
                            <Nav.Link>Developers</Nav.Link>
                        </LinkContainer>
                        <LinkContainer exact to={'/projects'}>
                            <Nav.Link>Projects</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
