import React, { Component } from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import RaisedButton from 'material-ui/RaisedButton'
import {NavToggleButton} from '../styled/Drawer'


const interiorDrawer = {
  height: 'calc(100% - 56px)', 
  top: 56
}


export default class DrawerSimpleExample extends Component {
    
    constructor(props) {
      super(props);
      this.state = {
        open: true,
        width: 250
      }
    }


    handleToggle = () => {
      this.setState( prevState => ({open: !prevState.open}))
    }
    // handleToggle = () => this.setState({open: !this.state.open});

    render() {
      return (
        <div className="">
          <RaisedButton
            label="Toggle Drawer"
            onTouchTap={this.handleToggle}
          />
          <Drawer open={this.state.open}
                  width={this.state.width} 
                  containerStyle={interiorDrawer}>
            <MenuItem>Menu Item</MenuItem>
            <Divider/>
            <MenuItem>Menu Item 2</MenuItem>
          </Drawer>
        </div>
      )
    }
}

          // <NavToggleButton
          //     onTouchTap={this.handleToggle}
          //     width={this.state.width}
          //     open={this.state.open}
          // />