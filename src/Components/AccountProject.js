import React from 'react'
import { ListGroup, Row, Col, Image, Button } from 'react-bootstrap'

function AccountProject({data}) {
    return (
        <ListGroup variant="flush">
            {data.map((project, index) => (
                <ListGroup.Item>
                    <Row>
                        <Col xl={3}>
                            <Image src="https://timeweb.com/ru/community/article/2e/2e3ad626c4c3b15bdb5d2146ed7d919b_thumb.jpg" fluid />
                        </Col>
                        <Col xl={7}>
                            <b>Name Project</b>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500</p>
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
