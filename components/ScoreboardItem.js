import React from 'react'
import { connect } from 'react-redux'
import { removeUser } from '../actions'

class ScoreboardItem extends React.Component {

	render() {
		const { user, position } = this.props
		return (
			<li>
				<img src={ user.avatarUrl } width="100" height="100" />
				<button onClick={ () => this.props.removeUser(user) } value={ user.username }>X</button> {/* I can't believe I'm passing the username in the event via the value */}
				<h3>{ position } - <a href={ user.homeUrl } target="_blank">{ user.username }</a></h3>
				<p>
					{ user.starCount } star{ user.starCount !== 1 ? 's' : '' }
				</p>
			</li>
		)
	}

}

const mapDispatchToProps = (dispatch) => ({
	removeUser: (user) => dispatch(removeUser(user))
})

export default connect(null, mapDispatchToProps)(ScoreboardItem)
