import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { developerDeleteProjectAction, developerDeleteSkillAction } from '../Actions/DevelopersAction'

function DeleteScreen({history}) {
    const dispatch = useDispatch()
    const accountInfo = useSelector(state => state.userLogin)
    const {userInfo} = accountInfo

    const clickHandler = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('id_user', userInfo.id)
        if (history.location.state.type === 'skill'){
            formData.append('id', history.location.state.detail.id)
            dispatch(developerDeleteSkillAction(formData))
        } else {
            formData.append('id', history.location.state.detail.id)
            dispatch(developerDeleteProjectAction(formData))
        }
    }
    return (
        <div>
            <Container className='pt-5'>
                <div style={{borderRadius: 8, border: '2px solid #e5e7eb', background: '#fff', padding: '50px 100px', maxWidth: 650, margin: '0 auto'}}>
                        <p>Are you sure you want to delete "{history.location.state.type === 'skill' ? history.location.state.detail.name : history.location.state.detail.title}"?</p>
                        <Button size='lg' onClick={() => history.push('/account')} className='px-4 py-2' variant="info">Go Back</Button>
                        <Button size='lg' onClick={clickHandler} className='px-4 py-2 mx-2' variant="info">Confirm</Button>
                </div>
            </Container>
        </div>
    )
}

export default DeleteScreen
