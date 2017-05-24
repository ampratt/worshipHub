import C from '../../constants'
import update from 'immutability-helper'
import _ from 'lodash'

export const service = (state=null, action) => 
	(action.type === C.ADD_SERVICE) ? 
		action.payload : 
		state


export const allServices = (state=[], action) => {

	switch(action.type) {

		case C.ADD_SERVICE :

			const hasServiceAlready = state.some( service => 
				(service.date === action.payload.date && 
				 service.title === action.payload.title ))

			return (hasServiceAlready) ?
				state : 
				[
					...state,
					service(null, action)
				]

		case C.REMOVE_SERVICE :

			return state.filter( service => service.id !== action.payload)


		case C.EDIT_SERVICE :

			if(action.payload.id !== null) {

				let toEdit = _.findIndex(state, {id: action.payload.id})
				return update(state, {
					[toEdit]: {$set: action.payload}
				})
			}
			
		default:
			return state
	}
}
