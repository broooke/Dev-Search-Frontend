import React from 'react'
import { Image, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function AccountLeft({userInfo}) {
    return (
        <div style={{border: '2px solid #e5e7eb', borderRadius: 8, textAlign: 'center', padding: 45, background: '#fff'}}>
            <LinkContainer to="/account/edit">
                <Button variant="outline-info" className="mb-3" size="sm">Edit</Button>
            </LinkContainer>
            <br></br>
            <Image src={userInfo?.profile_image} fluid height='200px' width='200px' style={{borderRadius: '50%', border: '1px solid #5aa5b9'}} />
            <h4><b>{userInfo?.name}</b></h4>
            <p>{userInfo?.short_intro}</p>
            <small>Based on {userInfo?.location}</small>
        </div>
    )
}

export default AccountLeft
