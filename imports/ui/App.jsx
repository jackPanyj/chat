import React, {Component} from 'react'
import NavBar from './shared/NavBar.jsx'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Radium, { StyleRoot } from 'radium'
import AppBar from 'material-ui/AppBar'

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
          {this.state.renderNavBar ? <NavBar /> : <AppBar />}
          {this.props.children}
        </div>
      </StyleRoot>
    )
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired
}

export default Radium(App)
