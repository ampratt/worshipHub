import React from 'react'
import { render } from 'react-dom'
import { Router, hashHistory  } from 'react-router'
import Routes from './routes'

// redux store
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import storeFactory from  './store/'
import sampleData from './initialState.json'
import { addPerson, addSong, removePerson } from './actions/actions'

// Needed for onTouchTap - http://stackoverflow.com/a/34015469/988941

const initialState = (localStorage["redux-store"]) ?
    JSON.parse(localStorage["redux-store"]) :
    sampleData

const saveState = () => 
    localStorage["redux-store"] = JSON.stringify(store.getState())

const store = storeFactory(initialState)
window.store = store
store.subscribe(saveState)

const reduxHistory = syncHistoryWithStore(hashHistory, store)

// store.dispatch(
// 	addPerson("Emily", "Pratt","","123456789", Math.floor(Math.random() * 199)+1)
// )
// store.dispatch(
// 	removePerson(2)
// )
// store.dispatch(
// 	addSong("my dispatched song title", "Aaron Pratt", Math.floor(Math.random() * 199)+1)
// )

render(
	<Provider store={store}>
		<Router history={reduxHistory}
				routes={Routes}
		/>
	</Provider>,
		document.getElementById('react-container')
)

if (module.hot) {
  module.hot.decline("./routes");
}