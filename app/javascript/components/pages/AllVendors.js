import React, { Component } from 'react'
import { Container, Row, Col, Card, CardBody, CardTitle, CardFooter, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'

export class AllVendors extends Component {
    render() {
        const { vendors } = this.props
        return (
            <React.Fragment>
            <Row>
                <Col md="2">
                    <Sidebar/>
                </Col>
                <Container>
                    <Row md={3} xs={1}>
                        {vendors.map((v,i)=>
                        <Col className="vendor-cards">
                            <Card key={v.id}>
                                <CardTitle>{v.name}</CardTitle>
                                <CardBody>{v.category}</CardBody>
                                <Link to={`/vendorinfo/${v.id}`} className="text-white">
                                    <Button>Details</Button>
                                </Link>
                                <CardFooter>{v.city}, {v.state} {v.zip}</CardFooter>
                            </Card>
                        </Col>
                        )}
                    </Row>
                </Container>
            </Row>
            </React.Fragment>
        )
    }
}

export default AllVendors
