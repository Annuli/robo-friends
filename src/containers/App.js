import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary'
//import { robots } from'./robots'; // Test array of objects; robots.js file
import './App.css';

// STATE: An object that describes your application
// PROPS: Things that come out of STATE
// App.js is the parent class
// So a parent component feeds 'STATE' into a child component and
// the child component receives that STATE, then that STATE is a property (props)
// the child component can never change the STATE; here, child receives STATE as 'robots'
class App extends Component {
	constructor() {
		super()
		this.state = { // Describes our 'App' (two STATES); class owns STATE, so allowed to change the STATE
			robots: [], // Would normally have empty array and would populate with online array
			searchfield: ''
		} 
	}

	// Update with new STATE of the object; when the component does mount
	// Data fetching; get what data you need
	componentDidMount() {
		// 'fetch' gets an http(s) address (from server); and coverts the response
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({robots: users}));
	}
	
	// Search for names of the robots; a prop
	// Must use this syntax if creating function in React; knows that the event is from class App
	onSearchChange = (event) => {
		
		// another rule(syntax) if using React...
		// Changing the state so the searchfield always get updated
		this.setState({searchfield: event.target.value})
	}

	// STATE is passed as props; CardList accepts 'robots' as props
	render() {
		// De-structure the STATE for ease of reading
		const { robots, searchfield } = this.state;

		// Filter(array method) the name of the robot
		const filteredRobots = robots.filter(robot => {
		// If the 'robot' array includes the name in the searchField, return that 'robot' info
		return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		// Give the user a display of load time/speed
		if(robots.length === 0) {
			return <h1>Loading</h1>
		} else {
			return (
				<div className='tc'>
					<h1 className='f1'>RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<ErrorBoundary>
							<CardList robots={ filteredRobots }/>
						</ErrorBoundary>
					</Scroll>
				</div>
			);
		} 
	}
}

export default App;