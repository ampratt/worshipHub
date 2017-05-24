import C from '../constants'


/* PEOPLE */
export function addPerson(firstName, lastName, email, phone, id) {
	// Add any application logic here that is not allowed in reducers!

	return {
		type: C.ADD_PERSON,
		payload: {firstName, lastName, email, phone, id}
	}
}

export const removePerson = function(id) {
	return {
		type: C.REMOVE_PERSON,
		payload: id
	}
}

export const editPerson = () => 
	({
		type: C.EDIT_PERSON,
		payload: id
	})


/* SONGS */
export function addSong(title='', author='', originalKey='', 
						theme='', bpm=null, CCLI=null, 
						scriptureReference=[], notes='',id) {
	return {
		type: C.ADD_SONG,
		payload: {title, author, originalKey, theme, 
				bpm, CCLI, scriptureReference, notes,id}
	}
}

export const removeSong = (id) => 
	({
		type: C.REMOVE_SONG,
		payload: id
	})

export const editSong = (id) => 
	({
		type: C.EDIT_SONG,
		payload: id
	})



/* SERVICES */
export function addService(title='', date=new Date(), location='', id) {
	// Add any application logic here that is not allowed in reducers!

	return {
		type: C.ADD_SERVICE,
		payload: {title, date, location, id}
	}
}

export const removeService = function(id) {
	return {
		type: C.REMOVE_SERVICE,
		payload: id
	}
}

export const editService = (id) => 
	({
		type: C.EDIT_SERVICE,
		payload: id
	})




/* ERRORS */
export const addError = (message) => 
   ({
      type: C.ADD_ERROR,
      payload: message
   })

export const clearError = index => 
    ({
        type: C.CLEAR_ERROR,
        payload: index
    }) 