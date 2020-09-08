import React from "react"
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Top from './Top'
import Home from './Home'
import Dashboard from './pages/Dashboard'

class MainApp extends React.Component {
  constructor(props){
    super(props)
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

          <Top signed_in={signed_in} sign_in_route={sign_in_route} sign_out_route={sign_out_route} new_user_registration_path={new_user_registration_path}/>
					
          <Switch>
          
          <Route exact path="/" render={(props) => <Home signed_in={signed_in} sign_in_route={sign_in_route} sign_out_route={sign_out_route} new_user_registration_path={new_user_registration_path}/> } />
          
          <Route exact path="/dashboard" component={ Dashboard } />
					</Switch>

        </React.Fragment>
			</Router>
    );
  }
}

export default MainApp