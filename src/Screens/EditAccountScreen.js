import React, { useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { developerUpdateAction } from '../Actions/DevelopersAction'

function EditAccountScreen({history}) {
    const accountInfo = useSelector(state => state.userLogin)
    const dispatch = useDispatch()
    const {userInfo} = accountInfo
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [location, setLocation] = useState('')
    const [bio, setBio] = useState('')
    const [intro, setIntro] = useState('')
    const [picture, setPicture] = useState('')
    const [github, setGithub] = useState('')
    const [vk, setVk] = useState('')
    const [linked, setLinked] = useState('')
    const [website, setWebsite] = useState('')
    const [youtube, setYoutube] = useState('')

    useEffect(() => {
        if (userInfo) {
            setName(userInfo.name)
            setEmail(userInfo.email)
            setUsername(userInfo.username)
            setLocation(userInfo.location)
            setBio(userInfo.bio)
            setIntro(userInfo.short_intro)
            setGithub(userInfo.social_github)
            setVk(userInfo.social_vk)
            setLinked(userInfo.social_linkedin)
            setWebsite(userInfo.social_website)
            setYoutube(userInfo.social_youtube)
        } else {
            history.push('/login')
        }
    }, [userInfo, history])

    const uploadFileHandler = (e) => {
        const file = e.target.files[0]
        setPicture(file)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('id', userInfo.id)
        formData.append('username', username)
        formData.append('name', name)
        formData.append('email', email)
        formData.append('location', location)
        formData.append('intro', intro)
        formData.append('bio', bio)
        formData.append('picture', picture)
        formData.append('github', github)
        formData.append('vk', vk)
        formData.append('linkedin', linked)
        formData.append('youtube', youtube)
        formData.append('website', website)
        dispatch(developerUpdateAction(formData))
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
                        <Form.Control value={name} onChange={(e) => setName(e.target.value)} type="text" />
                    </Form.Group>
                    <Form.Group className="my-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="text" />
                    </Form.Group>
                    <Form.Group className="my-3">
                        <Form.Label>Username</Form.Label>
                        <Form.Control value={username} onChange={(e) => setUsername(e.target.value)} type="text" />
                    </Form.Group>
                    <Form.Group className="my-3">
                        <Form.Label>Location</Form.Label>
                        <Form.Control value={location} onChange={(e) => setLocation(e.target.value)} type="text" />
                    </Form.Group>
                    <Form.Group className="my-3">
                        <Form.Label>About Me</Form.Label>
                        <Form.Control value={bio} onChange={(e) => setBio(e.target.value)} type="text" />
                    </Form.Group>
                    <Form.Group className="my-3">
                        <Form.Label>Short Intro</Form.Label>
                        <Form.Control value={intro} onChange={(e) => setIntro(e.target.value)} type="text" />
                    </Form.Group>
                    <div className="my-3">
                        <label htmlFor="formFile" className="form-label">Profile Picture</label>
                        <input onChange={uploadFileHandler} className="form-control" type="file" id="formFile" />
                    </div>
                    <Form.Group className="my-3">
                        <Form.Label>GitHub</Form.Label>
                        <Form.Control value={github} onChange={(e) => setGithub(e.target.value)} type="text" />
                    </Form.Group>
                    <Form.Group className="my-3">
                        <Form.Label>VK</Form.Label>
                        <Form.Control value={vk} onChange={(e) => setVk(e.target.value)} type="text" />
                    </Form.Group>
                    <Form.Group className="my-3">
                        <Form.Label>LinkedIn</Form.Label>
                        <Form.Control value={linked} onChange={(e) => setLinked(e.target.value)} type="text" />
                    </Form.Group>
                    <Form.Group className="my-3">
                        <Form.Label>WebSite</Form.Label>
                        <Form.Control value={website} onChange={(e) => setWebsite(e.target.value)} type="text" />
                    </Form.Group>
                    <Form.Group className="my-3">
                        <Form.Label>YouTube</Form.Label>
                        <Form.Control value={youtube} onChange={(e) => setYoutube(e.target.value)} type="text" />
                    </Form.Group>
                    
                    <Button variant="info" size='lg' type="submit">Submit</Button>
                </Form>
            </div>
        </Container>
    )
}

export default EditAccountScreen
