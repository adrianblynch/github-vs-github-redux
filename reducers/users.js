import fixtures from 'json!../fixtures.json'

const sortByStarCount = (a, b) => b.starCount - a.starCount

const userExists = (state, username) => state.find(u => u.username === username) !== undefined

const mapReposToUser = (repos) => {
	console.log("mapReposToUser", repos)
	const { login, avatar_url, html_url } = repos[0].owner
	return {
		username: login,
		avatarUrl: avatar_url,
		starCount: repos.reduce((count, repo) => count + repo.stargazers_count, 0),
		ownReposCount: repos.length,
		homeUrl: html_url
	}
}

export default (state = fixtures.users.sort(sortByStarCount), action) => {

	console.log("Action", action)
	console.log("State before", state)

	let newState = state

	if (action.type === 'REMOVE_USER') {

		newState = [...state].filter(user => user.username !== action.user.username)

	} else if (action.type === 'FETCH_USER') {

		console.log("User existings", userExists(state, action.meta.username))

		if (!userExists(state, action.meta.username)) {
			const user = mapReposToUser(action.payload)
			newState = [...state, user].sort(sortByStarCount)
		}

	}

	console.log("State before", newState)

	return newState

}
