import React, { Component } from 'react'
import { Link } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin'

import Menu from './ui/Menu'
import Template from './containers/Template'
// import '../stylesheets/index.scss'

injectTapEventPlugin()

// const MuiApp = () => (
//   <MuiThemeProvider>
//     <div>
//       <App />
//     </div>
//   </MuiThemeProvider>
// );

const App = ({children}) =>
  <MuiThemeProvider>
    <div className="app">
        <Menu />
        <Template children={children} />
    </div>
  </MuiThemeProvider>

// class App extends Component {
// 	render() {
// 		return (
// 			<div>
// 				<Menu />	
// 				<div className="container">
// 				  	<div className="row">
// 				      <div className="col">
// 				      </div>
// 			  		</div>
// 					{React.cloneElement(this.props.children, this.props)}
// 				</div>
// 			</div>
// 		)
// 	}
// }

export default App;


			// <SinglePost ...this.props />