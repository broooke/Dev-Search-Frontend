import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProfileLeft from '../Components/ProfileLeft'
import ProfileRight from '../Components/ProfileRight'

function DeveloperScreen() {
    return (
        <div style={{background: '#F8FAFD', padding: '25px calc(50% - 700px)'}}>
            <Row>
                <Col sm={12} xl={4}>
                    <ProfileLeft />
                </Col>
                <Col sm={12} xl={8}>
                    <ProfileRight />
                </Col>
            </Row>
        </div>
    )
}

export default DeveloperScreen
