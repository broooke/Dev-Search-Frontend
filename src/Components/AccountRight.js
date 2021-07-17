import React from 'react'
import { Row, Col, ListGroup, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import AccountProject from './AccountProject'

function AccountRight({userInfo}) {
    return (
        <div>
            <h3>About me</h3>
            <p>{userInfo?.bio}</p>
            <div className="d-flex justify-content-between my-2">
                <h3>SKILLS</h3>
                <LinkContainer to="/account/add/skill">
                    <Button variant="dark">Add Skill</Button>
                </LinkContainer>
            </div>
            <ListGroup variant="flush">
                {userInfo?.skills.map((skill, index) => (
                    <ListGroup.Item key={index}>
                        <Row>
                            <Col xl={10}>
                                <b>{skill.name}</b>
                                <p>{skill.description}</p>
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
            <div className="d-flex justify-content-between my-2 mt-3">
                <h3>PROJECTS</h3>
                <LinkContainer to="/account/add/project">
                    <Button variant="dark">Add Project</Button>
                </LinkContainer>
            </div>
            <Row>
                <Col xl={12}>
                    <AccountProject data={userInfo?.projects} />
                </Col>
            </Row>
        </div>
    )
}

export default AccountRight
