import React, {useState, useEffect} from 'react'
import { Form, FormControl, Button, Container, Row, Col, InputGroup } from 'react-bootstrap'
import Project from '../Components/Project'
import { useDispatch, useSelector } from 'react-redux'
import { projectsListAction } from '../Actions/ProjectsAction'

function ProjectsScreen({history}) {
    const dispatch = useDispatch()
    const [keyword, setKeyword] = useState('')
    const q = history.location.search
    const projectsList = useSelector(state => state.projectsList)
    const {loading , error, projects} = projectsList
    
    useEffect(() => {
        dispatch(projectsListAction(q))
    }, [dispatch, q])

    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword) {
            history.push(`/projects/?q=${keyword}`)
        } else {
            history.push(history.location.pathname)
        }
    }

    return (
        <div>
            <div className='p-5' style={{backgroundColor: '#ededfd', color: '#2d2d39'}}>
                <Container>
                    <h2 className="text-center mt-5">SEARCH FOR <b>PROJECTS</b></h2>
                    
                    <Form onSubmit={submitHandler} inline>
                            <InputGroup className='justify-content-center'>
                                <FormControl
                                size="lg"
                                type="search"
                                placeholder="Search"
                                className="mr-4"
                                value={keyword}
                                onChange={(e) => setKeyword(e.target.value)}
                                style={{maxWidth: 400}}
                                required
                                >
                                </FormControl>

                                <Button type='submit' className='mx-3' variant='light'>
                                    Search
                                </Button>
                            </InputGroup>
                    </Form>
                </Container>
            </div>
            <div style={{background: '#F8FAFD'}}>
                <Container>
                    <Row className='mt-5'>
                        {projects.map((project, index) => (
                            <Col key={index} sm={12} md={6} xl={4}>
                                {project && <Project project={project} />}
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default ProjectsScreen
