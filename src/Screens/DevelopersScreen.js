import React, {useEffect, useState} from 'react'
import { Form, FormControl, Button, Container, Row, Col, InputGroup } from 'react-bootstrap'
import Developers from '../Components/Developers'
import { useDispatch, useSelector } from 'react-redux'
import { developersListAction } from '../Actions/DevelopersAction'
import { useHistory } from 'react-router-dom'

function DevelopersScreen() {
    const dispatch = useDispatch()
    const [keyword, setKeyword] = useState('')
    let history = useHistory()
    let q = history.location.search 
    const developersList = useSelector(state=>state.developersList)
    const {error, developers, loading} = developersList

    useEffect(() => {
        dispatch(developersListAction(q))
    },[dispatch, q])

    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword) {
            history.push(`/?q=${keyword}`)
        } else {
            history.push(history.location.pathname)
        }
    }
    return (
        <div>
            <div className='p-5' style={{backgroundColor: '#2D2D39'}}>
                <Container>
                    <h2 style={{color: '#E5E7EB'}} className="text-center mt-5">CONNECT WITH <b>DEVELOPERS</b> <br></br> FROM AROUND THE WORLD</h2>
                    
                    <Form onSubmit={submitHandler} inline>
                            <InputGroup className='justify-content-center'>
                                <FormControl
                                size="lg"
                                type="search"
                                placeholder="Search"
                                value={keyword}
                                onChange={(e)=>setKeyword(e.target.value)}
                                style={{maxWidth: 400}}
                                required
                                >
                                </FormControl>

                                <Button type="submit" className='mx-3' variant='light'>
                                    Search
                                </Button>
                            </InputGroup>
                    </Form>
                </Container>
            </div>
            <div style={{background: '#F8FAFD'}}>
                <Developers developers={developers} />
            </div>
        </div>
    )
}

export default DevelopersScreen
