import React from 'react'
import ScoreboardItem from './ScoreboardItem'

class Scoreboard extends React.Component {

	render() {

		// Stop passing removeUser into ScoreboardItem as a prop: removeUser={ this.props.removeUser }

		const users = this.props.users.map((item, index) => {
			return (
				<ScoreboardItem
					position={ index + 1 }
					user={ item }
					key={ index }
				/>
			)
		})

		if (users.length === 0) {
			return null
		}

		return (
			<ul className="border">
				{users}
			</ul>
		)

	}

}

export default Scoreboard
