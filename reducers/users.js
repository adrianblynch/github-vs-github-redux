import fixtures from 'json!./fixtures.json'

const defaultState = fixtures

export default (state = defaultState, action) => {

	if (action.type === 'REQUEST_USER') {
		return [...state]
	}

	return state
}
