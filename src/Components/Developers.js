import React from 'react'
import { Col, Image, Row, Container } from 'react-bootstrap'
import photo from '../user-default.png'
import { LinkContainer } from 'react-router-bootstrap';

function Developers({developers}) {
    return (
        <Container>
            <Row>
            {developers.map((developer, index) => (
                <Col key={index} sm={12} md={6} xl={4}>
                    <LinkContainer style={{borderRadius: 8, border: '2px solid #e5e7eb', background: '#fff', height:'auto'}} to={`/profile/${developer.name}`}>
                        <div className="my-3 p-3">
                            <div className='d-flex align-items-center'>
                                <Image src={photo} fluid width='70px' height='70px' style={{borderRadius: '50%', border: '1px solid #5aa5b9'}} className='mr-2' />
                                <p>
                                    <b>{developer.name}</b>
                                    <br></br>
                                    <small>{developer.subname}</small>
                                </p>
                            </div>
                            <p>{developer.description}</p>
                            <div className='d-flex'>
                                <Row style={{margin: 0}}> 
                                    <span style={{color: '#5aa5b9', background: '#e6faff', borderRadius: 25, padding: '5px 10px', marginRight: 10, marginBottom: 5, fontSize: 14, width:'auto'}}>Python</span>
                                    <span style={{color: '#5aa5b9', background: '#e6faff', borderRadius: 25, padding: '5px 10px', marginRight: 10, marginBottom: 5, fontSize: 14, width:'auto'}}>Django</span>
                                    <span style={{color: '#5aa5b9', background: '#e6faff', borderRadius: 25, padding: '5px 10px', marginRight: 10, marginBottom: 5, fontSize: 14, width:'auto'}}>JavaScript</span>
                                    <span style={{color: '#5aa5b9', background: '#e6faff', borderRadius: 25, padding: '5px 10px', marginRight: 10, marginBottom: 5, fontSize: 14, width:'auto'}}>Django</span>
                                    <span style={{color: '#5aa5b9', background: '#e6faff', borderRadius: 25, padding: '5px 10px', marginRight: 10, marginBottom: 5, fontSize: 14, width:'auto'}}>JavaScript</span>
                                </Row>
                            </div>
                        </div>
                    </LinkContainer>
                </Col>
                
            ))}
            </Row>
        </Container>
    )
}

export default Developers
