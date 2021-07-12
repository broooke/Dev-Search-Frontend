import React from 'react'
import photo from '../user-default.png'
import { Image } from 'react-bootstrap'

function ProfileLeft({developer}) {
    return (
        <div style={{border: '2px solid #e5e7eb', borderRadius: 8, textAlign: 'center', padding: 45, background: '#fff'}}>
            <Image src={developer.profile_image} fluid height='200px' width='200px' style={{borderRadius: '50%', border: '1px solid #5aa5b9'}} />
            <h4><b>{developer.name}</b></h4>
            <p>{developer.short_intro}</p>
            <small>Based on {developer.location}</small>
            <i className="bi bi-linkedin"></i>
        </div>
    )
}

export default ProfileLeft
