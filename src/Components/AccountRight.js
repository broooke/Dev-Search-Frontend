import React from 'react'
import { Row, Col, ListGroup, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import AccountProject from './AccountProject'

function AccountRight() {
    const data = [
        {'name': 'Magzine', 'user': 'Nikita'},
        {'name': 'Magzine', 'user': 'Nikita'},
        {'name': 'Magzine', 'user': 'Nikita'},
        {'name': 'Magzine', 'user': 'Nikita'},
        {'name': 'Magzine', 'user': 'Nikita'},
    ]
    return (
        <div>
            <h3>About me</h3>
            <p>I build new projects just to tickle my brain and love teaching others how they're made. While I keep busy teaching courses, I still take interviews in search of a great team & projects that interest me.</p>
            <div className="d-flex justify-content-between my-2">
                <h3>SKILLS</h3>
                <LinkContainer to="/account/add/skill">
                    <Button variant="dark">Add Skill</Button>
                </LinkContainer>
            </div>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <Row>
                        <Col xl={10}>
                            <b>React</b>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </Col>
                        <Col xl={2} className="d-flex flex-column">
                            <Button variant="outline-info" size="sm">Edit</Button>
                            <br></br>
                            <Button variant="outline-info" size="sm">Delete</Button>
                        </Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                        <Col xl={10}>
                            <b>React</b>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </Col>
                        <Col xl={2} className="d-flex flex-column">
                            <Button variant="outline-info" size="sm">Edit</Button>
                            <br></br>
                            <Button variant="outline-info" size="sm">Delete</Button>
                        </Col>
                    </Row>
                </ListGroup.Item>
            </ListGroup>
            <div className="d-flex justify-content-between my-2 mt-3">
                <h3>PROJECTS</h3>
                <LinkContainer to="/account/add/project">
                    <Button variant="dark">Add Project</Button>
                </LinkContainer>
            </div>
            <Row>
                <Col xl={12}>
                    <AccountProject data={data} />
                </Col>
            </Row>
        </div>
    )
}

export default AccountRight
