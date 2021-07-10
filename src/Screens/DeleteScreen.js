import React from 'react'
import { Button, Container } from 'react-bootstrap'

function DeleteScreen() {
    return (
        <div>
            <Container className='pt-5'>
                <div style={{borderRadius: 8, border: '2px solid #e5e7eb', background: '#fff', padding: '50px 100px', maxWidth: 650, margin: '0 auto'}}>
                        <p>Are you sure you want to delete "Yoga Vive"?</p>
                        <Button size='lg' className='px-4 py-2' variant="info">Go Back</Button>
                        <Button size='lg' className='px-4 py-2 mx-2' variant="info">Confirm</Button>
                </div>
            </Container>
        </div>
    )
}

export default DeleteScreen
