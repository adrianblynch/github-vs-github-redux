import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import App from './components/App.js'
import fixtures from 'json!./fixtures.json' // Default users come from our fixtures file - For now

// Let's create a store and pass it into App

const reducer = (state = fixtures, action) => {

	// if (action.type === 'REQUEST_USER') {
	// 	return [...state]
	// }

	return state

}

const store = createStore(reducer)

const render = () => {
	ReactDOM.render(
		<App users={store.getState().users} />,
		document.getElementById('app')
	)
}

render()
store.subscribe(render)
