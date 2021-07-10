import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function AddSkillScreen() {
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
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" type="text" style={{height: 150}} />
                    </Form.Group>
                    
                    <Button variant="info" size='lg' type="submit">Submit</Button>
                </Form>
            </div>
        </Container>
    )
}

export default AddSkillScreen
