import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'

function Projects({projects}) {
    return (
        <Row>
            {projects.map((project, index) => (
                <Col key={index} sm={12} md={6}>
                    <Card className='mb-3'>
                    <Card.Img variant="top" src="https://timeweb.com/ru/community/article/2e/2e3ad626c4c3b15bdb5d2146ed7d919b_thumb.jpg" />
                    <Card.Body>
                        <Card.Title>Mumble Social Network</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">By Gaiydenko Nikita</Card.Subtitle>
                        <Card.Text>
                        <b>90%</b> Postitive Feedback (74 Votes)
                        </Card.Text>
                    </Card.Body>
                    <Row className='mx-2 mb-3'>
                        <div style={{color: '#5aa5b9', background: '#e6faff', borderRadius: 25, padding: '5px 20px', marginRight: 10, marginBottom: 5}}>Python</div>
                        <div style={{color: '#5aa5b9', background: '#e6faff', borderRadius: 25, padding: '5px 20px', marginRight: 10, marginBottom: 5}}>Django</div>
                        <div style={{color: '#5aa5b9', background: '#e6faff', borderRadius: 25, padding: '5px 20px', marginRight: 10, marginBottom: 5}}>JavaScript</div>
                        <div style={{color: '#5aa5b9', background: '#e6faff', borderRadius: 25, padding: '5px 20px', marginRight: 10, marginBottom: 5}}>Django</div>
                        <div style={{color: '#5aa5b9', background: '#e6faff', borderRadius: 25, padding: '5px 20px', marginRight: 10, marginBottom: 5}}>JavaScript</div>
                    </Row>
                    </Card>
                </Col>
            ))}
            <Col>
            
            </Col>
        </Row>
    )
}

export default Projects
