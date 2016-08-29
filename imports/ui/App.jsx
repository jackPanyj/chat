import React, {Component} from 'react'
import NavBar from './shared/NavBar.jsx'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Radium, { StyleRoot } from 'radium'
import AppBar from 'material-ui/AppBar'
import AppDrawer from './shared/AppDrawer.jsx'
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

class App extends Component {

  componentWillMount () {
    let setNavBarState = () => this.setState({renderNavBar: window.innerWidth > 700})
    setNavBarState()
    window.onresize = setNavBarState
  }

  getChildContext () {
    return { muiTheme: getMuiTheme() }
  }

  getStyles() {
    return {
      root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }
    }
  }
  render () {
    const styles = this.getStyles()
    return (
      <StyleRoot>
        <div style = {styles.root}>
          {this.state.renderNavBar ? <NavBar currentUser = {this.props.currentUser} userInfo = {this.props.userInfo}/> : <AppBar onLeftIconButtonTouchTap = {e => this.handleTouchTap(e)} />}
          <AppDrawer ref='drawer' />
          {this.props.children}
        </div>
      </StyleRoot>
    )
  }
  handleTouchTap() {
    this.refs.drawer.handleToggle();
  }
}
App.propTypes = {
  currentUser: React.PropTypes.string,
};
App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired
}

export default createContainer(() => {
  return {
    currentUser: Meteor.userId(),
    userInfo: Meteor.user()
  }
}, Radium(App))
