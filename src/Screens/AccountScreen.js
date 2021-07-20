import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AccountLeft from '../Components/AccountLeft'
import AccountRight from '../Components/AccountRight'
import { useSelector } from 'react-redux'

function AccountScreen({history}) {
    const accountInfo = useSelector(state => state.userLogin)
    const {userInfo} = accountInfo

    useEffect(() => {
        if (!userInfo) {
            history.push('/login')
        }
    }, [userInfo, history])

    return (
        <Container className='mt-4' style={{background: '#F8FAFD'}}>
            <Row>
                <Col sm={12} xl={4}>
                    <AccountLeft userInfo={userInfo} />
                </Col>
                <Col sm={12} xl={8}>
                    <AccountRight userInfo={userInfo}  />
                </Col>
            </Row>
        </Container>
    )
}

export default AccountScreen
