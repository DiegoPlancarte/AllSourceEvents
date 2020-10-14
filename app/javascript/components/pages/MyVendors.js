import React, { Component } from 'react'
import { Container, Row, Col, Card, CardBody, CardText, CardImg, CardTitle, CardFooter, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

export class MyVendors extends Component {
  render() {
    const { vendors, current_user } = this.props

    const vendor = vendors.filter((v,i)=> {
      return(v.user_id === current_user.id)
    })

    const bakery = require('../../../assets/images/bakery')
    const catering = require('../../../assets/images/catering')
    const eventplanner = require('../../../assets/images/eventplanner')
    const florist = require('../../../assets/images/florist')
    const venue = require('../../../assets/images/venue')
    return (
      <React.Fragment>
        <Container>
          <h1 className="text-primary" id="header">My Vendors</h1>
          <hr/>
          <Row md="1" lg="2" xl="3">
            {vendor.map((v,i)=> {
                let imageName = () => {
                  if (v.category === 'Baker') {
                    return `${bakery}`
                  } else if (v.category === 'Catering') {
                    return `${catering}`
                  } else if (v.category === 'Event Planner') {
                    return `${eventplanner}`
                  } else if (v.category === 'Florist') {
                    return `${florist}`
                  } else if (v.category === 'Venue') {
                    return `${venue}`
                  }}
                return (
                  <Col className="vendor-cards">
                    <Card key={v.id} border="light" className="shadow">
                      <CardImg className="img-fluid" src={imageName()}/>
                      <CardBody>
                        <CardTitle><strong>{v.name}</strong></CardTitle>
                        <CardText>{v.category}</CardText>
                        <Link to={`/vendorinfo/${v.id}`}>
                          <Button className="text-white">Details</Button>
                        </Link>
                      </CardBody>
                      <CardFooter>{v.city}, {v.state} {v.zip}</CardFooter>
                    </Card>
                  </Col>
          )})}
          </Row>
        </Container>
      </React.Fragment>
    )
  }
}

export default MyVendors
