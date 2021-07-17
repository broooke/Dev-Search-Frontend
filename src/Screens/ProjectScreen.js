import React, { useEffect, useState } from 'react'
import { Form, FormControl, Button, Container, Row, Col, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addReviewAction, projectDetailsAction } from '../Actions/ProjectsAction'

function ProjectScreen({match}) {
    const dispatch = useDispatch()
    const projectName = match.params.name
    const [vote, setVote] = useState('')
    const [body, setBody] = useState('')
    const projectDetails = useSelector(state => state.projectDetails)
    const {loading, error, project} = projectDetails
    const userLoginInfo = useSelector(state => state.userLogin)
    const {userInfo} = userLoginInfo

    useEffect(() => {
        dispatch(projectDetailsAction(projectName))
    }, [dispatch, projectName])
    
    const submitHandler = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('username', userInfo.username)
        formData.append('title', projectName)
        formData.append('body', body)
        formData.append('vote', vote)
        dispatch(addReviewAction(formData))
        dispatch(projectDetailsAction(projectName))
    }

    return (
        <Container>
            {loading ? <h1>Loading...</h1>
                : error ? <h1>Error...</h1>
                    : 
                    (
                        <Row style={{marginBottom: 120}} className='mt-5'>
                            <Col sm={12} md={8}>
                                <Image style={{width:'100%'}} src={project.featured_image} fluid />
                                <p className='mt-2'><b>{project?.owner?.name}</b></p>
                                <h1>{project.title}</h1>
                                <h4>ABOUT THE PROJECT</h4>
                                <p>{project.description}</p>
                                <hr></hr>
                                <h4>FEEDBACK</h4>
                                <h6>{project?.vote_ratio}% Positive Feedback ({project?.vote_total} Vote)</h6>
                                {userInfo?.id === project?.owner?.id ? <p className='mt-4' style={{color: '#737373'}}>You can not review you project</p>
                                    : project?.reviewers?.includes(userInfo?.id) ? <p className='mt-4' style={{color: '#737373'}}>You are already reviewed this project</p>
                                        : userInfo ? 
                                        <Form onSubmit={submitHandler} className="mt-5">
                                            <select value={vote} onChange={(e) => setVote(e.target.value)} required className="form-select" aria-label="Default select example">
                                                <option value="">----</option>
                                                <option value="up">Up Vote</option>
                                                <option value="down">Down Vote</option>
                                            </select>
                                            <FormControl value={body} onChange={(e) => setBody(e.target.value)} placeholder="Write something about this project..." className="mt-3" as="textarea" type="text" style={{height: 150}} />
                                            <Button className="mt-3" variant="info" size='lg' type="submit">Submit</Button>
                                        </Form>
                                            : <p className='mt-4' style={{color: '#737373'}}>You are not <Link to="/login" style={{color: '#5aa5b9'}}>logged in</Link></p>
                                }
                                <div className="mt-5">
                                    {project?.reviews?.map((review, index) => (
                                        <div key={index} className='d-flex align-items-center mb-2'>
                                            <Image src={review.owner.profile_image} fluid width='70px' height='70px' style={{borderRadius: '50%', border: '1px solid #5aa5b9'}} className='mr-2' />
                                            <p className='mx-3'>
                                                <b>{review.owner.name}</b>
                                                <br></br>
                                                <small style={{color: '#737373'}}><b>{review.body}</b></small>
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </Col>

                            <Col sm={12} md={4}>
                                <h4>TOOLS & STACKS</h4>
                                <Row className='mb-4'>
                                    {project?.tags?.map((tag, index) => (
                                        <div key={index} style={{background: '#EDEDFD', borderRadius: 25, padding: '5px 20px', marginRight: 10, width: 'auto', marginBottom: 5}}>{tag.name}</div>
                                    ))}
                                </Row>
                                <a href={project?.demo_link} style={{padding: 10, borderBottom: '2px solid gray', color: 'gray', textDecoration: 'none'}}>Live Demo</a>
                            </Col>
                        </Row>
                    )
            }
        </Container>
    )
}

export default ProjectScreen
