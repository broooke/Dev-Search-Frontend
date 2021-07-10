import React from 'react'
import Select from 'react-select'
import { Button, Container, Form } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function AddProjectScreen() {
    const tags = [
        {'value': 'Django', 'label': 'Django'},
        {'value': 'JS', 'label': 'JS'},
        {'value': 'Python', 'label': 'Python'},
        {'value': 'React', 'label': 'React'},
    ]
    return (
        <Container>
            <div style={{background: '#fff', borderRadius: 8, border: '2px solid #e5e7eb', padding: 25, maxWidth: 1000, margin: '0 auto', marginTop: 80}}>
                <LinkContainer to="/account">
                    <Button variant="dark">Back To Account</Button>
                </LinkContainer>
                <Form>
                    <Form.Group className="my-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <div className="my-3">
                        <label for="formFileProject" className="form-label">Project Picture</label>
                        <input className="form-control" type="file" id="formFileProject" />
                    </div>
                    <Form.Group className="my-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" type="text" style={{height: 150}} />
                    </Form.Group>
                    <Form.Group className="my-3">
                        <Form.Label>Demo Link</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="my-3">
                        <Form.Label>Source Link</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="my-3">
                        <Form.Label>Tags</Form.Label>
                        <Select
                            placeholder='Добавьте тег...'
                            isMulti
                            name="tags"
                            options={tags}
                            onChange={''}
                            closeMenuOnSelect={false}
                            className="basic-multi-select"
                            classNamePrefix="select"
                        />
                    </Form.Group>
                    
                    <Button variant="info" size='lg' type="submit">Submit</Button>
                </Form>
            </div>
        </Container>
    )
}

export default AddProjectScreen
