import Dashboard from '../ui/Dashboard'
import { connect } from 'react-redux'

// grabs state from redux store and maps properties to child React component
const mapStateToProps = state => 
({
	allSongs: state.allSongs,
	allServices: state.allServices,
	allPeople: state.allPeople

})

// higher order function that returns another function
// we send to that (2nd) the ui component to wrap
const Container = connect(mapStateToProps)(Dashboard)

export default Container;