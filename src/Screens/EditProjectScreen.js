import React, {useEffect, useState} from 'react'
import Select from 'react-select'
import { Button, Container, Form } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { tagsListAction } from '../Actions/ProjectsAction'
import { developerEditProjectAction } from '../Actions/DevelopersAction'

function EditProjectScreen({history}) {
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
    const newDe = []

    useEffect(() => {
        dispatch(tagsListAction())
        if (history?.location?.state?.detail) {
            setTitle(history?.location?.state?.detail?.title)
            setDescription(history?.location?.state?.detail?.description)
            setDemo(history?.location?.state?.detail?.demo_link)
            setSource(history?.location?.state?.detail?.source_link)
            history?.location?.state?.detail?.tags.forEach(element => {
                newDe.push({'value': element.name, 'label': element.name})
                setTagsList(newDe)
            })
        } else {
            history.push('/login')
        }
    }, [dispatch, history])

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
        formData.append('id_user', userInfo?.id)
        formData.append('id', history?.location?.state?.detail?.id)
        formData.append('title', title)
        formData.append('description', description)
        formData.append('demo', demo)
        formData.append('source', source)
        formData.append('description', description)
        formData.append('picture', picture)
        formData.append('tags', JSON.stringify(tagsList))
        dispatch(developerEditProjectAction(formData))
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
                        <label htmlFor="formFileProject1" className="form-label">Project Picture</label>
                        <input onChange={uploadFileHandler} className="form-control" type="file" id="formFileProject1" />
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
                        {tagsList && <Select
                            placeholder='Добавьте тег...'
                            isMulti
                            defaultValue={tagsList}
                            name="tags"
                            options={tags?.map((tag) =>{
                                return {'value': tag.name, 'label': tag.name}
                            })}
                            onChange={selectHandler}
                            closeMenuOnSelect={false}
                            className="basic-multi-select"
                            classNamePrefix="select"
                        />}
                    </Form.Group>
                    
                    <Button variant="info" size='lg' type="submit">Submit</Button>
                </Form>
            </div>
        </Container>
    )
}

export default EditProjectScreen
