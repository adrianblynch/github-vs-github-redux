export const fetchUser = (username) => {

	const url = `https://api.github.com/users/${username.trim()}/repos?per_page=100`
	const request = fetch(url)
		.then(res => res.json())
		.catch(err => console.log(`Error fetching username ${username}:`, err))

	return {
		type: 'FETCH_USER',
		payload: request,
		meta: {
			username
		}
	}

}

const fetchUserFailure = (err) => {
	return {

	}
}

export const removeUser = (user) => {
	console.log("REMOVE", user)
	return {
		type: 'REMOVE_USER',
		user
	}
}
