import React, { Component } from 'react'
import { ListGroup, ListGroupItem, Button } from 'reactstrap'

export default class Sidebar extends Component {
  render() {
    return (
      <React.Fragment>
        <ListGroup>
          <ListGroupItem tag="a" href="/dashboard">My Dashboard</ListGroupItem>
          <ListGroupItem tag="a" href="/allvendors">All Vendors</ListGroupItem>
          <ListGroupItem tag="a" href="/myvendors">My Listings</ListGroupItem>
          <ListGroupItem tag="a" href="/newvendor">Create Vendor</ListGroupItem>
          <ListGroupItem tag="a" href="/account">Account</ListGroupItem>
        </ListGroup>
      </React.Fragment>
    )
  }
}

