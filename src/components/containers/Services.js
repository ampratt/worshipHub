import Services from '../ui/Services'
import { connect } from 'react-redux'
// import { setGoal } from '../../actions'

const mapStateToProps = (state) =>
({
	// goal: state.goal
})

const mapDispatchToProps = dispatch =>
({
	onNewGoal(goal){
		dispatch(
			// setGoal(goal)
		)
	}
})

export default connect(mapStateToProps)(Services)