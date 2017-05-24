import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

// reducers
import { allSongs } from './songs'
import { allPeople } from './people'
import { allServices } from './services'
import { errors } from './errors'

const rootReducer = combineReducers({
  allSongs,
  allPeople,
  allServices,
  errors,
  routing: routerReducer
})

export default rootReducer;
