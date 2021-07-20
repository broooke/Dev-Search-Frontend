import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { developerMessageAction } from '../Actions/DevelopersAction'

function MessageScreen({match}) {
    const dispatch = useDispatch()
    const messageInfo = useSelector(state => state.messageDetails)
    const {message} = messageInfo
    console.log(message)

    useEffect(() => {
        dispatch(developerMessageAction(match.params.id))
    }, [dispatch, match])

    return (
        <div>
            <Container className='pt-5'>
                <div style={{maxWidth: 700, margin: '0 auto', borderRadius: 8, border: '2px solid #e5e7eb', background: '#fff', padding: 25}}>
                    <LinkContainer to={`/messages`}>
                        <Button variant='dark'>Go Back</Button>
                    </LinkContainer>
                    <h3 className="my-4">{message?.subject}</h3>
                    <p style={{color: '#5aa5b9', marginBottom: 0}}><b>{message?.name}</b></p>
                    <small style={{color: '#737373'}}>{message?.created.slice(0, 10)} at {message?.created.slice(11, 16)}</small>
                    <p className='mt-4' style={{color: '#737373'}}>{message?.body}</p>
                </div>
            </Container>
        </div>
    )
}

export default MessageScreen
