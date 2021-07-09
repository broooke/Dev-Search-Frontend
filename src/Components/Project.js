import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Project({project}) {
    return (
        <LinkContainer to={`/project/${project?.title}`}>
        <Card className='mb-3'>
            <Card.Img variant="top" src="https://timeweb.com/ru/community/article/2e/2e3ad626c4c3b15bdb5d2146ed7d919b_thumb.jpg" />
            <Card.Body>
                <Card.Title>Mumble Social Network</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">By Gaiydenko Nikita</Card.Subtitle>
                <Card.Text>
                <b>90%</b> Postitive Feedback (74 Votes)
                </Card.Text>
            </Card.Body>
            <Row className='mx-2 mb-3' style={{margin: 0}}> 
                <span style={{color: '#5aa5b9', background: '#e6faff', borderRadius: 25, padding: '5px 10px', marginRight: 10, marginBottom: 5, fontSize: 14, width:'auto'}}>Python</span>
                <span style={{color: '#5aa5b9', background: '#e6faff', borderRadius: 25, padding: '5px 10px', marginRight: 10, marginBottom: 5, fontSize: 14, width:'auto'}}>Django</span>
                <span style={{color: '#5aa5b9', background: '#e6faff', borderRadius: 25, padding: '5px 10px', marginRight: 10, marginBottom: 5, fontSize: 14, width:'auto'}}>JavaScript</span>
                <span style={{color: '#5aa5b9', background: '#e6faff', borderRadius: 25, padding: '5px 10px', marginRight: 10, marginBottom: 5, fontSize: 14, width:'auto'}}>Django</span>
                <span style={{color: '#5aa5b9', background: '#e6faff', borderRadius: 25, padding: '5px 10px', marginRight: 10, marginBottom: 5, fontSize: 14, width:'auto'}}>JavaScript</span>
            </Row>
        </Card>
        </LinkContainer>
    )
}

export default Project
