import React from 'react'
import { Button, Image, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function ProfileLeft({developer, user}) {
    return (
        <div style={{border: '2px solid #e5e7eb', borderRadius: 8, textAlign: 'center', padding: 45, background: '#fff'}}>
            <Image src={developer.profile_image} fluid height='200px' width='200px' style={{borderRadius: '50%', border: '1px solid #5aa5b9'}} />
            <h4><b>{developer.name}</b></h4>
            <p>{developer.short_intro}</p>
            <small>Based on {developer.location}</small>
            <Row className='justify-content-center mt-2'>
                {developer.social_linkedin && <a className='p-0 mx-1' href={developer.social_linkedin} style={{width: 'auto', color: '#5aa5b9'}}><i style={{fontSize: 30}} className="fab fa-linkedin"></i></a>}
                {developer.social_github && <a className='p-0 mx-1' href={developer.social_github} style={{width: 'auto', color: '#5aa5b9'}}><i style={{fontSize: 30}} className="fab fa-github-square"></i></a>}
                {developer.social_vk && <a className='p-0 mx-1' href={developer.social_vk} style={{width: 'auto', color: '#5aa5b9'}}><i style={{fontSize: 30}} className="fab fa-vk"></i></a>}
                {developer.social_youtube && <a className='p-0 mx-1' href={developer.social_youtube} style={{width: 'auto', color: '#5aa5b9'}}><i style={{fontSize: 30}} className="fab fa-youtube-square"></i></a>}
                {developer.social_website && <a className='p-0 mx-1' href={developer.social_website} style={{width: 'auto', color: '#5aa5b9'}}><i style={{fontSize: 30}} className="fas fa-globe"></i></a>}
            </Row>
            {user?.id !== developer.id && user
                ? 
                <LinkContainer to={{pathname: '/message/send', state: {detail: developer}}}><Button className='mt-2' variant='info'>Send Message</Button></LinkContainer> 
                    : null}
        </div>
    )
}

export default ProfileLeft
