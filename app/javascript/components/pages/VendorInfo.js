import React, { Component } from 'react'
import { CardDeck, Row, Col, Card, CardImg, CardText, CardBody,CardTitle, Container } from 'reactstrap';
import { Link } from "react-router-dom"

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
        console.log(this.state.vendor)
        return (
                <Container>
                { vendor && 
                <Row>
                    <Col>
                    <CardDeck>
                        <Col>
                        <Card>
                            <CardBody>
                            <CardText className="text-center"> {vendor.name} </CardText>
                            <CardText className="text-center"> {vendor.category}</CardText>
                            <CardText className="text-center"> {vendor.city}, {vendor.state.toUpperCase()} {vendor.zip}</CardText>
                            <CardText className="text-center"> <em>Phone:</em> {vendor.phone}</CardText>
                            <CardText className="text-center"> <em>Email:</em> {vendor.email} </CardText>
                            {signed_in && (current_user.id === vendor.user_id) && 
                                <div className="text-center">
                                <Link to="/allvendors" className= "btn btn-danger" onClick={this.handleDelete} >Delete Listing</Link>
                                &nbsp;
                                <Link to={`/edit/${vendor.id}`} className= "btn btn-info">Edit Listing</Link>
                                </div>
                            }
                            </CardBody>
                        </Card>
                        </Col>
                    </CardDeck>
                    </Col>
                </Row>
                }
            </Container>
        )
    }
}

export default VendorInfo
