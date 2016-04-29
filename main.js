import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
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

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
)
