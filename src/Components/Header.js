import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useSelector } from 'react-redux'

function Header() {
    const userInfoLogin = useSelector(state => state.userLogin)
    const {userInfo} = userInfoLogin
    return (
        <div>
            <Navbar style={{background: '#2D2D39'}} variant="dark">
                <Container>
                    <Navbar.Brand href="/">DevSearch</Navbar.Brand>
                    <Nav className="ml-auto">
                        <LinkContainer exact to={'/'}>
                            <Nav.Link>Developers</Nav.Link>
                        </LinkContainer>
                        <LinkContainer exact to={'/projects'}>
                            <Nav.Link>Projects</Nav.Link>
                        </LinkContainer>
                        {userInfo ?
                            (
                                <>
                                    <LinkContainer exact to={'/account'}>
                                        <Nav.Link>Account</Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer exact to={'/messages'}>
                                        <Nav.Link>Inbox</Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer exact to={'/'}>
                                        <Nav.Link>Logout</Nav.Link>
                                    </LinkContainer>
                                </>
                            )
                            :
                            <LinkContainer exact to={'/login'}>
                                <Nav.Link>Login/Sign Up</Nav.Link>
                            </LinkContainer>
                        }
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
