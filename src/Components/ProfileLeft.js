import React from 'react'
import photo from '../user-default.png'
import { Image } from 'react-bootstrap'

function ProfileLeft() {
    return (
        <div style={{border: '2px solid #e5e7eb', borderRadius: 8, textAlign: 'center', padding: 45, background: '#fff'}}>
            <Image src={photo} fluid height='200px' width='200px' style={{borderRadius: '50%', border: '1px solid #5aa5b9'}} />
            <h4><b>Gaiydenko Nikita</b></h4>
            <p>I am developer</p>
            <small>Based on MSCOW</small>
        </div>
    )
}

export default ProfileLeft
