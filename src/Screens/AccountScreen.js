import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AccountLeft from '../Components/AccountLeft'
import AccountRight from '../Components/AccountRight'

function AccountScreen() {
    return (
        <Container className='mt-4' style={{background: '#F8FAFD'}}>
            <Row>
                <Col sm={12} xl={4}>
                    <AccountLeft />
                </Col>
                <Col sm={12} xl={8}>
                    <AccountRight />
                </Col>
            </Row>
        </Container>
    )
}

export default AccountScreen
