import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProfileLeft from '../Components/ProfileLeft'
import ProfileRight from '../Components/ProfileRight'

function DeveloperScreen() {
    return (
        <div style={{background: '#F8FAFD', paddingTop: 25}}>
        <Container>
            <Row>
                <Col sm={12} xl={4}>
                    <ProfileLeft />
                </Col>
                <Col sm={12} xl={8}>
                    <ProfileRight />
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default DeveloperScreen
