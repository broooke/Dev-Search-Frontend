import React from 'react'
import photo from '../user-default.png'
import { Image, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function AccountLeft() {
    return (
        <div style={{border: '2px solid #e5e7eb', borderRadius: 8, textAlign: 'center', padding: 45, background: '#fff'}}>
            <LinkContainer to="/account/edit">
                <Button variant="outline-info" className="mb-3" size="sm">Edit</Button>
            </LinkContainer>
            <br></br>
            <Image src={photo} fluid height='200px' width='200px' style={{borderRadius: '50%', border: '1px solid #5aa5b9'}} />
            <h4><b>Gaiydenko Nikita</b></h4>
            <p>I am developer</p>
            <small>Based on MSCOW</small>
        </div>
    )
}

export default AccountLeft
