import React from 'react'
import { ListGroup, Row, Col, Image, Button } from 'react-bootstrap'

function AccountProject({data}) {
    return (
        <ListGroup variant="flush">
            {data.map((project, index) => (
                <ListGroup.Item key={index}>
                    <Row>
                        <Col xl={3}>
                            <Image src={project.featured_image} fluid />
                        </Col>
                        <Col xl={7}>
                            <b>{project.title}</b>
                            {project.description.length > 115 ? <p style={{color: '#737373'}}>{project.description.slice(0,115)}...</p>
                                : <p style={{color: '#737373'}}>{project.description}</p>
                            }
                        </Col>
                        <Col xl={2} className="d-flex flex-column">
                            <Button variant="outline-info" size="sm">Edit</Button>
                            <br></br>
                            <Button variant="outline-info" size="sm">Delete</Button>
                        </Col>
                    </Row>
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
}

export default AccountProject
