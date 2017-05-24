import C from '../constants'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers'
// import initialState from '../initialState.json'


const consoleMessages = store => next => action => {

	let result

	console.groupCollapsed(`dispatching action => ${action.type}`)
	console.log(`BEFORE DISPATCH

		songs: ${store.getState().allSongs.length}
		people: ${store.getState().allPeople.length}
		services: ${store.getState().allServices.length}
	`)
	result = next(action)

	let { allSongs, allPeople, allServices, errors } = store.getState()

	console.log(`AFTER DISPATCH

		songs: ${allSongs.length}
		people: ${allPeople.length}
		services: ${allServices.length}

	`)

	console.groupEnd()
	return result
}

export default (initialState={}) => {
	return applyMiddleware(thunk, consoleMessages)(createStore)(rootReducer, initialState)
}



// const store = createStore(rootReducer, initialState)

// console.log('initial state', store.getState())

// store.dispatch({
// 	type: C.ADD_PERSON,
// 	payload: {
// 			"firstName": "another",
// 			"lastName": "Markey",
// 			"email": "another@markey.com",
// 			"phone": "234567891",
// 			"id": 2
// 		}
// })

// console.log('next state', store.getState())