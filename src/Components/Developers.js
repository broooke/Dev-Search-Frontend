import React from 'react'
import { Col, Image, Row, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';

function Developers({developers}) {
    return (
        <Container>
            <Row>
            {developers.map((developer, index) => (
                <Col key={index} sm={12} md={6} xl={4}>
                    <LinkContainer style={{borderRadius: 8, border: '2px solid #e5e7eb', background: '#fff', height:'auto'}} to={`/profile/${developer.username}`}>
                        <div className="my-3 p-3">
                            <div className='d-flex align-items-center'>
                                <Image src={developer.profile_image} fluid width='70px' height='70px' style={{borderRadius: '50%', border: '1px solid #5aa5b9'}} className='mr-2' />
                                <p className='mx-3'>
                                    <b>{developer.name}</b>
                                    <br></br>
                                    <small style={{color: '#737373'}}><b>{developer.short_intro}</b></small>
                                </p>
                            </div>
                            {developer?.bio?.length > 115 ? <p style={{color: '#737373'}}>{developer.bio.slice(0,115)}...</p>
                                : <p style={{color: '#737373'}}>{developer.bio}</p>
                            }
                            <div className='d-flex'>
                                <Row style={{margin: 0}}> 
                                    {developer.skills.map((skill, index) => (
                                        <span key={index} style={{color: '#5aa5b9', background: '#e6faff', borderRadius: 25, padding: '5px 10px', marginRight: 10, marginBottom: 5, fontSize: 14, width:'auto'}}>{skill.name}</span>
                                    ))}
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
