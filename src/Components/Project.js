import React from 'react'
import { Row, Card } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Project({project}) {
    return (
        <LinkContainer to={`/projects/${project?.title}`}>
            <Card className='mb-3'>
                <Card.Img variant="top" src={project.featured_image} style={{maxHeight: 230}} />
                <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">By Gaiydenko Nikita</Card.Subtitle>
                    <Card.Text>
                    <b>{project.vote_ratio}%</b> Postitive Feedback ({project.vote_total} Votes)
                    </Card.Text>
                </Card.Body>
                <Row className='mx-2 mb-3' style={{margin: 0}}>
                    {project.tags.map((tag, index) => (
                        <span key={index} style={{color: '#5aa5b9', background: '#e6faff', borderRadius: 25, padding: '5px 10px', marginRight: 10, marginBottom: 5, fontSize: 14, width:'auto'}}>{tag.name}</span>
                    ))}
                </Row>
            </Card>
        </LinkContainer>
    )
}

export default Project
