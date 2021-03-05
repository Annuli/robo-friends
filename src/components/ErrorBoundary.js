import React, { Component } from 'react';

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		}
	}

	// Will run this lifecycle hook if the page errors out
	componentDidCatch(error, info) {
		this.setState({ hasError: true })
	}

	// Display to user if an error occurs
	render() {
		if(this.state.hasError) {
			return <h1>That is not good</h1>
		}
		return this.props.children;
	}
}



export default ErrorBoundary;