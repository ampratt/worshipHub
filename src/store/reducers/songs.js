import C from '../../constants'
import update from 'immutability-helper'
import _ from 'lodash'

// functional p - pure functions -> DON"T mutate state
export const song = (state=null, action) => 
	(action.type === C.ADD_SONG) ? 
		action.payload : 
		state


export const allSongs = (state=[], action) => {

	switch(action.type) {

		case C.ADD_SONG :

			return [
				...state,
				song(null, action)
			]

		case C.REMOVE_SONG :

			return state.filter( song => song.id !== action.payload)
			// return state.filter( song => song.title !== action.payload)


		case C.EDIT_SONG :

			let toEdit = _.findIndex(state, {id: action.payload.id})
			return update(state, {
				[toEdit]: {$set: action.payload}
			})
			// return song(state[action.title], action)

		default:
			return state
	}
}


/* reducer takes in:
	1. action (info about what happened)
	2. copy of the current state

	i.e. {action, store} -> ok, let me check -> return (updated store)
*/