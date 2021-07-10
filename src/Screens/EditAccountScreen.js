import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function EditAccountScreen() {
    return (
        <Container>
            <div style={{background: '#fff', borderRadius: 8, border: '2px solid #e5e7eb', padding: 25, maxWidth: 1000, margin: '0 auto', marginTop: 80}}>
                <LinkContainer to="/account">
                    <Button variant="dark">Back To Account</Button>
                </LinkContainer>
                <Form>
                    <Form.Group className="my-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="my-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="my-3">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="my-3">
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="my-3">
                        <Form.Label>About Me</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="my-3">
                        <Form.Label>Short Intro</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <div className="my-3">
                        <label for="formFile" className="form-label">Profile Picture</label>
                        <input className="form-control" type="file" id="formFile" />
                    </div>
                    <Form.Group className="my-3">
                        <Form.Label>GitHub</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="my-3">
                        <Form.Label>VK</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="my-3">
                        <Form.Label>LinkedIn</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="my-3">
                        <Form.Label>WebSite</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="my-3">
                        <Form.Label>YouTube</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    
                    <Button variant="info" size='lg' type="submit">Submit</Button>
                </Form>
            </div>
        </Container>
    )
}

export default EditAccountScreen
