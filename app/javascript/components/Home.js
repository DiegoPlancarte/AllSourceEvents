import React from 'react'
import { Card, CardImg, Row,CardDeck,Col, CardText, Button, Container, Jumbotron } from 'reactstrap';

import App from 'images/app.jpg'
import Vendor from 'images/vendors.jpg'
import Event from 'images/event.jpg'

class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { sign_in_route, signed_in, sign_out_route, new_user_registration_path} = this.props
        return (
            <React.Fragment>
                <Jumbotron className="">
                    <h1>Welcome to All Source Events!</h1>
                    <hr className="my-2"/>
                    <p>All Source Events is a simple, yet powerful platform, for the modern social and party event planner… AND local businesses, who already are, or want to be involved, in events! </p>
                    <p>Social and party event marketplace tool! Form partnerships locally, expand, and achieve a high growth pattern in the event industry. </p>
                </Jumbotron>
                <Container xs={4} className="themed-container">
                    <CardDeck style={{display: 'flex', flexDirection: 'column'}} >
                        <Card  style={{border: 'none'}}>
                            <Row md={1} lg={2}>
                                <Col md="auto" lg={6}>
                                    <h2 className="text-center">
                                        All Source Events will help thousands of social events planners’ network with local vendors to change direction and forge a new path.
                                    </h2>
                                </Col>
                                <Col xs="auto">
                                        <CardImg src={ Vendor } className="img-fluid shadow p-1 mb-1 rounded" alt="creating a new trip" />
                                </Col>
                            </Row>
                        </Card>
                        <br />
                        <br />
                        <Card style={{border: 'none'}} >
                            <Row md={1} lg={2}>
                                <Col xs="auto">
                                    <CardImg src={ App } className="img-fluid shadow p-3 mb-5 bg-white rounded" alt="viewing upcoming trips"/>
                                </Col>
                                <Col md="auto" lg={6}>
                                    <h2 className="text-center">
                                        The current process of event management is fragmented for social event planners and businesses involved in the event industry who spend their lives trying to bring joy and happiness to others.
                                    </h2>
                                </Col>
                            </Row>
                        </Card>
                        <br />
                        <br />
                        <Card style={{border: 'none'}} >
                            <Row md={1} lg={2}>
                                <Col md="auto" lg={6}>
                                    <h2 className="text-center">
                                        Our mission is to provide modern social event planners and local businesses involved in the event industry with an all-encompassing platform to quickly and efficiently get things done simultaneously in order to create phenomenal events.  
                                    </h2>
                                </Col>
                                <Col xs="auto">
                                    <CardImg src={ Event } className="img-fluid shadow p-3 mb-5 bg-white rounded" alt="sharing trip with email"/>
                                </Col>
                            </Row>
                        </Card>
                        <br />
                        <br />
                    </CardDeck>
                    <Row xs={1}>
                        <h1 className="text-center">Ready to get started?</h1>
                    </Row>
                    <Row xs={1}>
                        <Col>
                            <div className="text-center">
                            {signed_in &&
                                <Button href="/dashboard" className="btn bg-primary text-white"><strong>My Dashboard</strong></Button>
                            }
                            {!signed_in &&
                            <>
                                <Button className="btn bg-primary text-white" href={new_user_registration_path}><strong>Sign Up</strong></Button> &nbsp;
                                <Button className="btn bg-primary text-white" href={sign_in_route}><strong>Sign In</strong></Button>
                            </>
                            }
                            </div>
                        </Col>
                    </Row>
                </Container>
                <br />
                <br />
            </React.Fragment>
        )
    }
}

export default Home;