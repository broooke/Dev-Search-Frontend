import React from 'react'
import { Form, FormControl, Button, Container, Row, Col, InputGroup } from 'react-bootstrap'
import Developers from '../Components/Developers'

function DevelopersScreen() {
    const developersInfo = [
        {'name': 'Gaydenko Nikita', 'subname': 'I am a fullstack Developer', 'description': 'I build new projects just to tickle my brain and love teaching others'},
        {'name': 'Dennis Ivy', 'subname': 'Love teaching', 'description': 'I am popular yutuber in programming!'},
        {'name': 'Gaydenko Nikita', 'subname': 'I am a fullstack Developer', 'description': 'I build new projects just to tickle my brain and love teaching others'},
        {'name': 'Dennis Ivy', 'subname': 'Love teaching', 'description': 'I am popular yutuber in programming!'},
        {'name': 'Gaydenko Nikita', 'subname': 'I am a fullstack Developer', 'description': 'I build new projects just to tickle my brain and love teaching others'},
        {'name': 'Dennis Ivy', 'subname': 'Love teaching', 'description': 'I am popular yutuber in programming!'},
        {'name': 'Gaydenko Nikita', 'subname': 'I am a fullstack Developer', 'description': 'I build new projects just to tickle my brain and love teaching others'},
        {'name': 'Dennis Ivy', 'subname': 'Love teaching', 'description': 'I am popular yutuber in programming!'},
    ]
    return (
        <div>
            <div className='p-5' style={{backgroundColor: '#2D2D39'}}>
                <Container>
                    <h2 style={{color: '#E5E7EB'}} className="text-center mt-5">CONNECT WITH <b>DEVELOPERS</b> <br></br> FROM AROUND THE WORLD</h2>
                    
                    <Form>
                        <Row>
                            <InputGroup className='justify-content-center'>
                                <FormControl
                                size="lg"
                                type="search"
                                placeholder="Search"
                                className="mr-4"
                                style={{maxWidth: 400}}
                                >
                                </FormControl>

                                <Button className='mx-3' variant='light'>
                                    Search
                                </Button>
                            </InputGroup>
                        </Row>
                    </Form>
                </Container>
            </div>
            <div style={{background: '#F8FAFD'}}>
                <Developers developers={developersInfo} />
            </div>
        </div>
    )
}

export default DevelopersScreen
