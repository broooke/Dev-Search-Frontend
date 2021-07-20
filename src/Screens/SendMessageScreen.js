import React, { useEffect, useState } from 'react'
import { Container, Button, Form } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { sendMessageAction } from '../Actions/DevelopersAction'

function SendMessageScreen({history}) {
    const userData = useSelector(state => state.userLogin)
    const {userInfo} = userData
    const dispatch = useDispatch()
    const [subject, setSubject] = useState('')
    const [body, setBody] = useState('')
    const [rec, setRec] = useState('')

    useEffect(() => {
        if (!userInfo) {
            history.push('/login')
        } else {
            if (history?.location?.state?.detail) {
                setRec(history?.location?.state?.detail?.id)
            }
        }
    }, [history, userInfo])

    const submitHandler = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('sender', userInfo.id)
        formData.append('recipient', rec)
        formData.append('name', userInfo.name)
        formData.append('email', userInfo.email)
        formData.append('subject', subject)
        formData.append('body', body)
        dispatch(sendMessageAction(formData))
    }

    return (
        <div>
            <Container className='pt-5'>
                <div style={{maxWidth: 700, margin: '0 auto', borderRadius: 8, border: '2px solid #e5e7eb', background: '#fff', padding: 25}}>
                    <LinkContainer to={`/`}>
                        <Button variant='dark'>Go Back</Button>
                    </LinkContainer>
                    <Form onSubmit={submitHandler} className='mt-4'>
                        <Form.Group>
                            <Form.Label>Subject</Form.Label>
                            <Form.Control value={subject} onChange={(e) => setSubject(e.target.value)} type='text' />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Body</Form.Label>
                            <Form.Control value={body} onChange={(e) => setBody(e.target.value)} type='text' as='textarea' />
                        </Form.Group>
                        <Button size='lg' variant='info' type='submit' className='mt-2'>Send</Button>
                    </Form>
                </div>
            </Container>
        </div>
    )
}

export default SendMessageScreen
