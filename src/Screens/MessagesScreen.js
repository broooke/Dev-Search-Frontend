import React, { useEffect } from 'react'
import { ListGroup, Container } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { developerMessagesAction } from '../Actions/DevelopersAction'

function MessagesScreen() {
    const dispatch = useDispatch()
    const accountInfo = useSelector(state => state.userLogin)
    const {userInfo} = accountInfo
    const messagesList = useSelector(state => state.messagesList)
    const {messages} = messagesList

    useEffect(() => {
        if (userInfo) {
            dispatch(developerMessagesAction(userInfo.id))
        }
    }, [dispatch, userInfo])

    return (
        <div>
            <Container className='pt-5'>
                <div style={{maxWidth: 1000, margin: '0 auto'}}>
                    <h2>NEW MESSAGES({messages?.filter(element => element.is_read === false).length})</h2>
                    <div style={{borderRadius: 8, border: '2px solid #e5e7eb', background: '#fff', padding: 25}}>
                        <ListGroup variant="flush">
                            {messages?.map((message, index) => (
                                <LinkContainer key={index} to={`/messages/${message.id}`}>
                                    <ListGroup.Item className="d-flex justify-content-between py-4">
                                        {message.is_read ?
                                            <>
                                                <span>{message.name}</span>
                                                <span>{message.body}</span>
                                                <span>{message.created.slice(0, 10)} at {message.created.slice(11, 16)}</span>
                                            </>
                                            :
                                                <>
                                                    <span><b>{message.name}</b></span>
                                                    <span><b>{message.body}</b></span>
                                                    <span><b>{message.created.slice(0, 10)} at {message.created.slice(11, 16)}</b></span>
                                                </>
                                        }
                                    </ListGroup.Item>
                                </LinkContainer>
                            ))}
                        </ListGroup>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default MessagesScreen
