import React, {useEffect, useState} from 'react'
import Select from 'react-select'
import { Button, Container, Form } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { tagsListAction } from '../Actions/ProjectsAction'
import { developerAddProjectAction } from '../Actions/DevelopersAction'

function AddProjectScreen() {
    const accountInfo = useSelector(state => state.userLogin)
    const {userInfo} = accountInfo
    const tagsInfo = useSelector(state => state.tagsList)
    const {tags} = tagsInfo
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [picture, setPicture] = useState('')
    const [description, setDescription] = useState('')
    const [demo, setDemo] = useState('')
    const [source, setSource] = useState('')
    const [tagsList, setTagsList] = useState('')

    useEffect(() => {
        dispatch(tagsListAction())
    }, [dispatch])

    const uploadFileHandler = (event) => {
        const file = event.target.files[0]
        setPicture(file)
    }

    const selectHandler = (e) => {
        const options = e
        setTagsList(options)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('id', userInfo?.id)
        formData.append('title', title)
        formData.append('description', description)
        formData.append('demo_link', demo)
        formData.append('source_link', source)
        formData.append('description', description)
        formData.append('picture', picture)
        formData.append('tags', JSON.stringify(tagsList))
        dispatch(developerAddProjectAction(formData))
    }

    return (
        <Container>
            <div style={{background: '#fff', borderRadius: 8, border: '2px solid #e5e7eb', padding: 25, maxWidth: 1000, margin: '0 auto', marginTop: 80}}>
                <LinkContainer to="/account">
                    <Button variant="dark">Back To Account</Button>
                </LinkContainer>
                <Form onSubmit={submitHandler}>
                    <Form.Group className="my-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control value={title} onChange={(e) => setTitle(e.target.value)} type="text" />
                    </Form.Group>
                    <div className="my-3">
                        <label for="formFileProject" className="form-label">Project Picture</label>
                        <input onChange={uploadFileHandler} className="form-control" type="file" id="formFileProject" />
                    </div>
                    <Form.Group className="my-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control value={description} onChange={(e) => setDescription(e.target.value)} as="textarea" type="text" style={{height: 150}} />
                    </Form.Group>
                    <Form.Group className="my-3">
                        <Form.Label>Demo Link</Form.Label>
                        <Form.Control value={demo} onChange={(e) => setDemo(e.target.value)} type="text" />
                    </Form.Group>
                    <Form.Group className="my-3">
                        <Form.Label>Source Link</Form.Label>
                        <Form.Control value={source} onChange={(e) => setSource(e.target.value)} type="text" />
                    </Form.Group>
                    <Form.Group className="my-3">
                        <Form.Label>Tags</Form.Label>
                        <Select
                            placeholder='Добавьте тег...'
                            isMulti
                            name="tags"
                            options={tags?.map((tag) =>{
                                return {'value': tag.name, 'label': tag.name}
                            })}
                            onChange={selectHandler}
                            closeMenuOnSelect={false}
                            className="basic-multi-select"
                            classNamePrefix="select"
                        />
                    </Form.Group>
                    
                    <Button variant="info" size='lg' type="submit">Submit</Button>
                </Form>
            </div>
        </Container>
    )
}

export default AddProjectScreen
