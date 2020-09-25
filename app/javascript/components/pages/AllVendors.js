import React, { Component } from 'react'
import { Container, Row, Col, Card, CardBody, CardTitle, CardFooter, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

export class AllVendors extends Component {
    render() {
        const { vendors } = this.props
        return (
            <Container>
                <Row>
                    <Col>
                        {vendors.map((v,i)=>
                        <Card key={v.id}>
                            <CardTitle>{v.name}</CardTitle>
                            <CardBody>{v.category}</CardBody>
                            <Link to={`/vendorinfo/${v.id}`}><Button>Details</Button></Link>
                            <CardFooter>{v.city}, {v.state}</CardFooter>
                        </Card>
                        )}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default AllVendors
