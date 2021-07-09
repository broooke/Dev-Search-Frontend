import React from 'react'
import { ListGroup, Container } from 'react-bootstrap'

function MessagesScreen() {
    return (
        <div style={{background: '#F8FAFD'}}>
            <Container style={{maxWidth: 1000}} className='pt-5'>
                <h2>NEW MESSAGES(0)</h2>
                <div style={{borderRadius: 8, border: '2px solid #e5e7eb', background: '#fff', padding: 25}}>
                    <ListGroup variant="flush">
                        <ListGroup.Item className="d-flex justify-content-between py-4">
                            <span>Steve Jobs</span>
                            <span>Good projects man!</span>
                            <span>15 июня в 18:26</span>
                        </ListGroup.Item>
                        <ListGroup.Item className="d-flex justify-content-between py-4">
                            <span>Steve Jobs</span>
                            <span>Good projects man!</span>
                            <span>15 июня в 18:26</span>
                        </ListGroup.Item>
                        <ListGroup.Item className="d-flex justify-content-between py-4">
                            <span>Steve Jobs</span>
                            <span>Good projects man!</span>
                            <span>15 июня в 18:26</span>
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </Container>
        </div>
    )
}

export default MessagesScreen
