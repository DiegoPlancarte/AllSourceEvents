import React from 'react'
import { Redirect } from 'react-router';
import { Container, Form, FormGroup, Label, Input, Col, Row, FormFeedback, Button } from 'reactstrap';

class NewVendor extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      success: false,
      form:{
        name: '',
        category: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        description: '',
        phone: '',
        email: '',
        user_id: this.props.current_user.id
      }

    }
}

handleChange = (e) => {
  let {form} = this.state
  form[e.target.name] = e.target.value
  this.setState({form: form})
}

handleSubmit = (vendors) => {
  this.props.onSubmit(this.state.form)
  this.setState({success:true})
}

render() {
  return(
    <React.Fragment>
      <Row>
      <Container sm={6} id="form">
        
        <h1 className="text-center" id="header">Add New Vendor!</h1>

      <Form>
        <Row>
          <Col md="9">
            <FormGroup>
              <Label for="name">Name of Vendor</Label>
              <Input
                type="text"
                name="name"
                id="name"
                onChange={this.handleChange}
                value={this.state.form.name}
                placeholder="Name your Vendor"
              />
            </FormGroup>
          </Col>
          <Col md="3">
            <FormGroup>
              <Label for="category">Type of Vendor</Label>
              <Input
                type="select"
                name="category"
                id="category"
                onChange={this.handleChange}
                value={this.state.form.category}
                placeholder="Select an option">
                  <option value="" selected="selected">Chose Type</option>
                  <option value="Catering">Catering</option>
                  <option value="Venue">Venue</option>
                  <option value="Florist">Florist</option>
                  <option value="Baker">Baker</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row>
            <Col md="5">
              <FormGroup>
                <Label for="address">Street Address</Label>
                <Input
                  type="text"
                  name="address"
                  id="address"
                  onChange={this.handleChange}
                  value={this.state.form.address}
                  placeholder="Enter Street Address"
                />
              </FormGroup>
            </Col>
            <Col md="3">
              <FormGroup>
                <Label for="city">City</Label>
                <Input
                  type="text"
                  name="city"
                  id="city"
                  onChange={this.handleChange}
                  value={this.state.form.city}
                  placeholder="City"
                />
              </FormGroup>
            </Col>
            <Col md="2">
              <FormGroup>
                <Label for="state">State</Label>
                <Input
                  type="select"
                  name="state"
                  id="state"
                  onChange={this.handleChange}
                  value={this.state.form.state}
                  placeholder="State">
                    <option value="" selected="selected">State</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                </Input>
              </FormGroup>
            </Col>
          <Col md="2">
            <FormGroup>
              <Label for="zip">Zip Code</Label>
              <Input
                type="text"
                name="zip"
                id="zip"
                onChange={this.handleChange}
                value={this.state.form.zip}
                placeholder="Zip Code"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <FormGroup>
              <Label for="phone">Phone Number</Label>
              <Input
                type="text"
                name="phone"
                id="phone"
                onChange={this.handleChange}
                value={this.state.form.phone}
                placeholder="Business Phone Number"
              />
            </FormGroup>
          </Col>
          <Col md="6">
          <FormGroup>
            <Label for="email">Email Address</Label>
            <Input
              type="text"
              name="email"
              id="email"
              onChange={this.handleChange}
              value={this.state.form.email}
              placeholder="Email Address"
            />
          </FormGroup>
          </Col>
        </Row>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              onChange={this.handleChange}
              value={this.state.form.description}
              placeholder="Business Description"
            />
          </FormGroup>
      </Form>
          <Button className="btn btn-primary text-white" onClick={this.handleSubmit}>
            Submit
          </Button>
          {this.state.success && <Redirect to="/allvendors" onClick={this.handleSubmit}/>}
        </Container>
        </Row>
    </React.Fragment>
    )
  }
}

export default NewVendor;