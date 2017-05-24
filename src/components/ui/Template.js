import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import NavDrawer from '../ui/Drawer'
import {Header, Main} from '../styled/Template'


// class Template extends Component {
const Template = ({children}) => 
        <div>

          <Header>
            title should be updated via state/props
          </Header>
          <Main>
            <NavDrawer />
            {children}
          </Main>
        </div>


export default Template

          // <NavDrawer
          //   auth={this.props.route.auth}
          //   authenticated={this.props.viewer.user}
          // />
