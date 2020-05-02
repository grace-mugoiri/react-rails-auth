import React, { Component } from 'react';
import Registrations from './auth/Registrations'

export default class extends Component{
	constructor(props) {
		super(props);
		this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
	}

	handleSuccessfulAuth(data) {
		this.props.handleLogin(data);
		this.props.history.push('/dashboard');
	}
	render() {
		return (
			<div>
				<h2>Home</h2>
				<h2>Status: {this.props.loggedInStatus}</h2>
				<Registrations handleSuccessfulAuth={this.handleSuccessfulAuth} />
			</div>
		)
	}
}
