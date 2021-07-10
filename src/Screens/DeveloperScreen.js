import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProfileLeft from '../Components/ProfileLeft'
import ProfileRight from '../Components/ProfileRight'

function DeveloperScreen() {
    return (
        <Container style={{background: '#F8FAFD'}}>
            <Row>
                <Col sm={12} xl={4}>
                    <ProfileLeft />
                </Col>
                <Col sm={12} xl={8}>
                    <ProfileRight />
                </Col>
            </Row>
        </Container>
    )
}

export default DeveloperScreen
