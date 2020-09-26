import React from 'react'
import { ButtonGroup, Button, Container, Col, Row } from 'reactstrap'
import Sidebar from './Sidebar'

class Dashboard extends React.Component {
    render() {
        return(
            <React.Fragment>
            <Row>
                <Col md="2">
                    <Sidebar/>
                </Col>
            </Row>
            </React.Fragment>
        )
    }
}

export default Dashboard