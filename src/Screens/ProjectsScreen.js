import React from 'react'
import { Form, FormControl, Button, Container, Row, Col, InputGroup } from 'react-bootstrap'
import Project from '../Components/Project'

function ProjectsScreen() {
    const data = [
        {'name': 'Magzine', 'user': 'Nikita'},
        {'name': 'Magzine', 'user': 'Nikita'},
        {'name': 'Magzine', 'user': 'Nikita'},
        {'name': 'Magzine', 'user': 'Nikita'},
        {'name': 'Magzine', 'user': 'Nikita'},
    ]
    return (
        <div>
            <div className='p-5' style={{backgroundColor: '#ededfd', color: '#2d2d39'}}>
                <Container>
                    <h2 className="text-center mt-5">SEARCH FOR <b>PROJECTS</b></h2>
                    
                    <Form>
                        <Row>
                            <InputGroup className='justify-content-center'>
                                <FormControl
                                size="lg"
                                type="search"
                                placeholder="Search"
                                className="mr-4"
                                style={{maxWidth: 400}}
                                >
                                </FormControl>

                                <Button variant='secondary'>
                                    Search
                                </Button>
                            </InputGroup>
                        </Row>
                    </Form>
                </Container>
            </div>
            <div style={{background: '#F8FAFD'}}>
                <Container>
                    <Row className='mt-5'>
                        {data.map((project, index) => (
                            <Col key={index} sm={12} md={6} xl={4}>
                                <Project />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default ProjectsScreen
