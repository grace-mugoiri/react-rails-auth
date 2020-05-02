import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			loggedInStatus: "Not Logged In",
			user: {}
		}
		this.handleLogin = this.handleLogin.bind(this);
	}

	handleLogin(data) {
		this.setState({
			loggedInStatus: "Logged In",
			user: data.user
		})
	}
	render() {
		return (
			<div className="app">
				<BrowserRouter>
					<Switch>
						<Route
							exact
							path={"/"}
							render={props => (
								<Home {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} />
							)} />
						<Route
							exact
							path={"/dashboard"}
							render={props => (
								<Dashboard {...props} loggedInStatus={this.state.loggedInStatus} />
							)} />
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}
