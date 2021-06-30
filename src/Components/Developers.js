import React from 'react'
import { Col, Image, Row, Container } from 'react-bootstrap'
import photo from '../user-default.png'

function Developers({developers}) {
    return (
        <Container>
            <Row>
            {developers.map((developer, index) => (
                <Col key={index} sm={12} md={6} xl={4}>
                    <div style={{borderRadius: 8, border: '2px solid #e5e7eb', background: '#fff'}} className="my-3 p-3">
                        <div className='d-flex align-items-center'>
                            <Image src={photo} width='70px' height='70px' style={{borderRadius: '50%', border: '1px solid #5aa5b9'}} className='mr-2' />
                            <p>
                                <b>{developer.name}</b>
                                <br></br>
                                <small>{developer.subname}</small>
                            </p>
                        </div>
                        <p>{developer.description}</p>
                    </div>
                </Col>
                
            ))}
            </Row>
        </Container>
    )
}

export default Developers
