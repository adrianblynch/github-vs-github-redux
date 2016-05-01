import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import Scoreboard from './Scoreboard'
import { fetchUser } from '../actions'

/*
	Todo:
	- Move the username field into its own component - Forcing us to implement comms between components
	- Add the `warn` class in a better(?) way: http://www.chloechen.io/react-animation-done-in-two-ways/
*/

class App extends React.Component {

	constructor() {
		super()
		this.state = { username: '' }
		this.handleSearch = this.handleSearch.bind(this)
		this.handleSearchChange = this.handleSearchChange.bind(this)
	}

	componentDidMount() {
		ReactDOM.findDOMNode(this.refs.username).focus();
	}

	handleSearch(event) {
		event.preventDefault()
		this.props.fetchUser(this.state.username)
		this.setState({ username: '' })
	}

	handleSearchChange(event) {
		this.setState({ username: event.target.value })
	}

	handleReposFailure(node, className) {
		// node.classList.remove(className)
		// setTimeout(() => node.classList.add(className), 0) // Note: http://stackoverflow.com/questions/17296576/css3-transition-doesnt-work-when-i-remove-class-of-newly-created-element
	}

	render() {
		return (
			<div>
				<h1>GitHub vs GitHub</h1>
				<form className="border" id="search" onSubmit={ this.handleSearch }>
					<input
						ref="username"
						type="text"
						placeholder="GitHub username..."
						value={ this.state.username }
						onChange={ this.handleSearchChange }
					/>
					<button>Go</button>
				</form>
				<Scoreboard users={ this.props.users } removeUser={ this.removeUser } />
			</div>
		)
	}

}

const mapStateToProps = (state) => ({
	users: state.users
})

const mapDispatchToProps = (dispatch) => ({
	fetchUser: (username) => dispatch(fetchUser(username))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
