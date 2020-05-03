import React, { Component } from 'react';
import Registrations from './auth/Registrations';
import Login from './auth/Login';
import axios from 'axios';

export default class extends Component{
	constructor(props) {
		super(props);
		this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
		this.handleLogoutClick = this.handleLogoutClick.bind(this);
	}

	handleSuccessfulAuth(data) {
		this.props.handleLogin(data);
		this.props.history.push('/dashboard');
	}

	handleLogoutClick() {
		axios
			.delete("http://localhost:3001/logout", { withCredentials: true })
			.then(response => {
				this.props.handleLogout();
		})
			.catch(error => {
				console.log("logout error", error);
		})
	}
	render() {
		return (
			<div>
				<h2>Home</h2>
				<h2>Status: {this.props.loggedInStatus}</h2>
				<button onClick={() => this.handleLogoutClick()}>Logout</button>
				<Registrations handleSuccessfulAuth={this.handleSuccessfulAuth} />
				<Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
			</div>
		)
	}
}
