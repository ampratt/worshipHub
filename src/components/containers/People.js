import People from '../ui/People'
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

export default connect(mapStateToProps, mapDispatchToProps)(People)