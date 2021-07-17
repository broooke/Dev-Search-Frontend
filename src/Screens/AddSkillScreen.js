import React, {useState} from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { developerAddSkillAction } from '../Actions/DevelopersAction'

function AddSkillScreen() {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const dispatch = useDispatch()
    const accountInfo = useSelector(state => state.userLogin)
    const {userInfo} = accountInfo

    const submitHandler = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('id', userInfo.id)
        formData.append('name', name)
        formData.append('description', description)
        dispatch(developerAddSkillAction(formData))
    }
    return (
        <Container>
            <div style={{background: '#fff', borderRadius: 8, border: '2px solid #e5e7eb', padding: 25, maxWidth: 1000, margin: '0 auto', marginTop: 80}}>
                <LinkContainer to="/account">
                    <Button variant="dark">Back To Account</Button>
                </LinkContainer>
                <Form onSubmit={submitHandler}>
                    <Form.Group className="my-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control value={name} onChange={(e) => setName(e.target.value)} required type="text" />
                    </Form.Group>
                    <Form.Group className="my-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control value={description} onChange={(e) => setDescription(e.target.value)} as="textarea" type="text" style={{height: 150}} />
                    </Form.Group>
                    
                    <Button variant="info" size='lg' type="submit">Submit</Button>
                </Form>
            </div>
        </Container>
    )
}

export default AddSkillScreen
