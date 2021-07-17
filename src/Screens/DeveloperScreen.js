import React, {useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProfileLeft from '../Components/ProfileLeft'
import ProfileRight from '../Components/ProfileRight'
import { useDispatch, useSelector } from 'react-redux'
import { developersDetailAction } from '../Actions/DevelopersAction'

function DeveloperScreen({match}) {
    const dispatch = useDispatch()
    const developerInfo = useSelector(state => state.developersDetail)
    const {loading, error, developer} = developerInfo
    
    useEffect(() => {
        dispatch(developersDetailAction(match.params.name))
    }, [dispatch, match])

    return (
        <Container style={{background: '#F8FAFD'}}>
            <Row className='mt-5'>
                <Col sm={12} xl={4}>
                    {developer && <ProfileLeft developer={developer} />}
                </Col>
                <Col sm={12} xl={8}>
                    {developer && <ProfileRight developer={developer} />}
                </Col>
            </Row>
        </Container>
    )
}

export default DeveloperScreen
