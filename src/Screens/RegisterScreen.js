import React, {useEffect, useState} from 'react'
import { Container, Form, Button, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { developerRegisterAction } from '../Actions/DevelopersAction'

function RegisterScreen({history}) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()
    const registerInfo = useSelector(state => state.userLogin)
    const {loading, error, userInfo} = registerInfo

    useEffect(() => {
        if (userInfo) {
            history.push('/account')
        }
    }, [userInfo, history])

    const submitHandler = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setMessage('Passwords dont matched')
        } else {
            const formData = new FormData()
            formData.append('name', name)
            formData.append('email', email)
            formData.append('username', username)
            formData.append('password', password)
            dispatch(developerRegisterAction(formData))
        }
    }
    return (
        <div style={{backgroundImage: "url(https://ocean-of-technologies.s3.us-east-2.amazonaws.com/pattern.jpg)", height: '100vh', paddingTop: 100}}>
            <Container>
                <div style={{background: '#fff', borderRadius: 8, border: '7px solid #e5e7eb', maxWidth: '40rem', margin: '0 auto', padding: '1rem 3rem'}}>
                    <div className='text-center'>
                        <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M35.8771 23.3316C35.8771 28.1564 31.9669 32.0668 27.142 32.0668C22.3172 32.0668 18.4068 28.1564 18.4068 23.3316C18.4068 18.5069 22.3172 14.5965 27.142 14.5965C31.9659 14.5965 35.8771 18.5079 35.8771 23.3316ZM64.2938 64.2939C63.1573 65.4314 61.6664 66 60.1766 66C58.6866 66 57.1959 65.4314 56.0594 64.2939C56.0594 64.2939 41.227 49.446 41.1097 49.3004C36.9593 51.9491 32.0338 53.4903 26.745 53.4903C11.974 53.4904 0 41.5162 0 26.7452C0 11.974 11.9749 0 26.7452 0C41.5155 0 53.4903 11.974 53.4903 26.7451C53.4903 32.0337 51.949 36.9594 49.3005 41.1097C49.4461 41.2259 64.294 56.0594 64.294 56.0594C66.5687 58.3327 66.5687 62.0198 64.2938 64.2939ZM47.9183 26.7451C47.9183 15.0516 38.4386 5.57196 26.7452 5.57196C15.0518 5.57196 5.5721 15.0516 5.5721 26.7451C5.5721 33.4934 8.73317 39.5004 13.6511 43.3779C14.2907 38.6376 18.343 34.9795 23.2588 34.9795H31.0234C35.7375 34.9795 39.6635 38.3416 40.5427 42.7974C45.0561 38.9142 47.9183 33.1656 47.9183 26.7451Z" fill="#696D97"/>
                        </svg>
                        <h2>Register an Account</h2>
                        <p>Create a new developer account</p>
                    </div>

                    <Form onSubmit={submitHandler}>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your name..."
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your email..."
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your username..."
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter your password..."
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Confirm your password..."
                                required
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </Form.Group>

                        <Button className='mt-3' type="submit" variant="dark" style={{width: 'auto'}}>Sign In</Button>
                        {message && <Alert className='my-2' variant="danger">{message}</Alert>}
                        {error && <Alert className='my-2' variant="danger">{error}</Alert>}
                        <p className="m-0 mt-4">Already have an Account?</p>
                        <Link to="/login" style={{width: 'auto', padding: 0, color: '#5aa5b9', textDecoration: 'none', fontSize: 20}}><b>Log In</b></Link>
                    </Form>
                </div>
            </Container>
        </div>
    )
}

export default RegisterScreen
