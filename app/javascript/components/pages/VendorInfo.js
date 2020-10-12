import React, { Component } from 'react'
import { CardDeck, Row, Col, Card, CardImg, CardText, CardBody, Container } from 'reactstrap';
import { Link } from "react-router-dom"
import Sidebar from './Sidebar';

export class VendorInfo extends Component {
  constructor(props){
    super(props)
      this.state={
        vendor:''
      }
      this.getVendInfo()
  }

  getVendInfo = () => {
    fetch(`/vendors/${this.props.match.params.id}`)
    .then((response)=> {
      return(response.json())
    }).then((data) => {
      this.setState({vendor:data})
    })
  }

  handleDelete = () => {
    this.props.onDelete(this.props.match.params.id)
  }

  render() {
    const { signed_in, current_user} = this.props
    const { vendor } = this.state
    const bakery = require('../../../assets/images/bakery')
    const catering = require('../../../assets/images/catering')
    const eventplanner = require('../../../assets/images/eventplanner')
    const florist = require('../../../assets/images/florist')
    const venue = require('../../../assets/images/venue')
    let imageName = () => {
      if (vendor.category === 'Baker') {
        return `${bakery}`
      } else if (vendor.category === 'Catering') {
        return `${catering}`
      } else if (vendor.category === 'Event Planner') {
        return `${eventplanner}`
      } else if (vendor.category === 'Florist') {
        return `${florist}`
      } else if (vendor.category === 'Venue') {
        return `${venue}`
      }}
    return (
      <React.Fragment>
          <Container>
            { vendor && 
              <CardDeck>
                <Card border="light" className="shadow">
                <Row>
                  <Col>
                    <CardImg className="img-fluid" src={imageName()}/>
                  </Col>
                  <Col>
                    <CardBody>
                      <CardText className="text-center"> {vendor.name} </CardText>
                      <CardText className="text-center"> {vendor.category}</CardText>
                      <CardText className="text-center"> {vendor.city}, {vendor.state.toUpperCase()} {vendor.zip}</CardText>
                      <CardText className="text-center"> <em>Phone:</em> {vendor.phone}</CardText>
                      <CardText className="text-center"> <em>Email:</em> {vendor.email} </CardText>
                      <CardText className="text-center"> <em>Description:</em> {vendor.description} </CardText>
                      {signed_in && (current_user.id === vendor.user_id) && 
                        <div className="text-center">
                        <Link to="/allvendors" className= "btn btn-danger" onClick={this.handleDelete} >Delete Listing</Link>
                        &nbsp;
                        <Link to={`/edit/${vendor.id}`} className= "btn btn-info">Edit Listing</Link>
                        </div>
                      }
                    </CardBody>
                  </Col>
                </Row>
                </Card>
              </CardDeck>
            }
          </Container>
      </React.Fragment>
    )
  }
}

export default VendorInfo
