import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Project from './Project'

function ProfileRight({developer}) {
    return (
        <div>
            <h3>About me</h3>
            <p>{developer.bio}</p>
            <h3>SKILLS</h3>
            {developer.skills.map((skill, index) => (
                <Row key={index}>
                    <Col md={3}>
                        <b>{skill.name}</b>
                    </Col>
                    <Col md={9}>
                        {skill.description}
                    </Col>
                </Row>
            ))}
            {/* <h3>OTHER SKILLS</h3>
            <div className='d-flex'>
                <div style={{background: '#EDEDFD', borderRadius: 25, padding: '5px 20px', marginRight: 10}}>Python</div>
                <div style={{background: '#EDEDFD', borderRadius: 25, padding: '5px 20px', marginRight: 10}}>JS</div>
                <div style={{background: '#EDEDFD', borderRadius: 25, padding: '5px 20px', marginRight: 10}}>HTML</div>
            </div> */}
            <h3>PROJECTS</h3>
            <Row>
                {developer.projects.map((project, index) => (
                    <Col key={index} sm={12} md={6}>
                        {project && <Project project={project}/>}
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default ProfileRight
