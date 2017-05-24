import C from '../../constants'
import update from 'immutability-helper'
import _ from 'lodash'

export const person = (state=null, action) => 
	(action.type === C.ADD_PERSON) ? 
		action.payload : 
		state


export const allPeople = (state=[], action) => {

	switch(action.type) {

		case C.ADD_PERSON :

			return [
				...state,
				person(null, action)
			]

		case C.REMOVE_PERSON :

			return state.filter( person => person.id !== action.payload)

		case C.EDIT_PERSON :

			let toEdit = _.findIndex(state, {id: action.payload.id})
			return update(state, {
				[toEdit]: {$set: action.payload}
			})


		default:
			return state
	}
}


/* reducer takes in:
	1. action (info about what happened)
	2. copy of the current state

	i.e. {action, store} -> ok, let me check -> return (updated store)
*/