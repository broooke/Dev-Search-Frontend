import React from 'react'
import { Form, FormControl, Button, Container, Row, Col, InputGroup, Image } from 'react-bootstrap'
import photo from '../user-default.png'

function ProjectScreen() {
    return (
        <Container>
            <Row className='mt-5'>
                <Col sm={12} md={8}>
                    <Image src={'https://timeweb.com/ru/community/article/2e/2e3ad626c4c3b15bdb5d2146ed7d919b_thumb.jpg'} fluid />
                    <p><b>Gaydenko Nikita</b></p>
                    <h1>Website</h1>
                    <h4>ABOUT THE PROJECT</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recen</p>
                    <hr></hr>
                    <h4>FEEDBACK</h4>
                    <h6>0% Positive Feedback (1 Vote)</h6>
                </Col>

                <Col sm={12} md={4}>
                    <h4>TOOLS & STACKS</h4>
                </Col>
            </Row>
        </Container>
    )
}

export default ProjectScreen
