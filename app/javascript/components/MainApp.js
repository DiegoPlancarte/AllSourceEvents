import React from "react"
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Top from './Top'
import Home from './Home'
import Dashboard from './pages/Dashboard'
import NewVendor from './pages/NewVendor'
import AllVendors from "./pages/AllVendors"
import MyVendors from "./pages/MyVendors"
import VendorInfo from "./pages/VendorInfo"
import EditVendor from "./pages/EditVendor"

class MainApp extends React.Component {
  constructor(props){
    super(props)
    this.state={
      vendors:[]
    }
    this.getVendors();
  }

  componentDidMount(){
    this.getVendors()
  }

  getVendors = () =>{
    fetch("/vendors")
    .then((response)=>{
      if(response.status === 200){
        return(response.json())
      }
    })
    .then((vendorsArray)=>{
      this.setState({vendors: vendorsArray})
    })
  }

  createVendor = (vendor) => {
    fetch('/vendors', {
      body: JSON.stringify(vendor),
      headers:{
        'Content-Type': 'application/json'
      },
      method: "POST"
    })
    .then((response) => {
      if(response.ok){
        return this.getVendors()
      }
    })
  }

  editVendor = (vendor) => {
    return fetch(`/vendors/${vendor.id}`, {
      body: JSON.stringify(vendor),
      headers: {
        'Content-Type': 'application/json'
      },
      method: "PUT"
    }).then((response) => {
      if(response.ok){
        return this.getVendors()
      }
    })
  }

  deleteVendor = (id) => {
    return fetch(`/vendors/${id}`, {
      method: "DELETE"
    }).then((response) => {
      if (response.ok) {
        return this.getVendors
      }
    })
  }

  render () {
		const {
			signed_in,
			sign_in_route,
			sign_out_route,
			current_user,
			new_user_registration_path
		} = this.props

    return (
      <Router>
        <React.Fragment>

          <Top signed_in={ signed_in } sign_in_route={ sign_in_route } sign_out_route={ sign_out_route } new_user_registration_path={ new_user_registration_path }/>

          <Switch>
            <Route exact path="/" render={(props) => <Home signed_in={ signed_in } sign_in_route={ sign_in_route } sign_out_route={ sign_out_route } new_user_registration_path={ new_user_registration_path }/> } />
            <Route exact path="/dashboard" component={ Dashboard } />
            <Route exact path="/newvendor" render={(props) => <NewVendor onSubmit={ this.createVendor } current_user={ current_user} /> } />
            <Route exact path="/vendorinfo/:id" render={(props) => <VendorInfo {...props} signed_in={ signed_in } current_user={ current_user} onDelete={this.deleteVendor} /> } />
            <Route exact path="/allvendors" render={(props) => <AllVendors {...props} vendors={ this.state.vendors } /> } />
            <Route exact path="/myvendors" render={(props) => <MyVendors {...props} vendors={ this.state.vendors } current_user={ current_user } /> } />
            <Route exact path="/edit/:id" render={(props) => <EditVendor {...props} onEdit={this.editVendor} current_user={current_user} vendors={this.state.vendors}/>}/>
          </Switch>

        </React.Fragment>
			</Router>
    );
  }
}

export default MainApp