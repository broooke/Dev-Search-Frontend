import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Projects from '../Components/Projects'

function ProfileRight() {
    const data = [
        {'name': 'Magzine', 'user': 'Nikita'},
        {'name': 'Magzine', 'user': 'Nikita'},
        {'name': 'Magzine', 'user': 'Nikita'},
        {'name': 'Magzine', 'user': 'Nikita'},
        {'name': 'Magzine', 'user': 'Nikita'},
    ]
    return (
        <div>
            <h3>About me</h3>
            <p>I build new projects just to tickle my brain and love teaching others how they're made. While I keep busy teaching courses, I still take interviews in search of a great team & projects that interest me.</p>
            <h3>SKILLS</h3>
            <Row className='row'>
                <Col md={3}>
                    <b>React</b>
                </Col>
                <Col md={9}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </Col>
            </Row>
            <Row className='row'>
                <Col md={3}>
                <b>Django</b>
                </Col>
                <Col md={9}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Col>
            </Row>
            <h3>OTHER SKILLS</h3>
            <div className='d-flex'>
                <div style={{background: '#EDEDFD', borderRadius: 25, padding: '5px 20px', marginRight: 10}}>Python</div>
                <div style={{background: '#EDEDFD', borderRadius: 25, padding: '5px 20px', marginRight: 10}}>JS</div>
                <div style={{background: '#EDEDFD', borderRadius: 25, padding: '5px 20px', marginRight: 10}}>HTML</div>
            </div>
            <h3>PROJECTS</h3>
            <Projects projects={data} />
        </div>
    )
}

export default ProfileRight
