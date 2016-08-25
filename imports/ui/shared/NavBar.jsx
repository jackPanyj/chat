import React, {Component} from 'react'
import { Link } from 'react-router'
import { Tabs, Tab } from 'material-ui/Tabs'

class NavBar extends Component {

  constructor(props) {
    super(props)
    this.state = { tabIndex: '/' }
  }

  componentWillMount () {
    this.setState({ tabIndex: this.getSelectedIndex() })
  }

  componentWillReceiveProps(nextProps, next) {
   this.setState({
     tabIndex: this.getSelectedIndex()
   })
  }

  getSelectedIndex () {
    const isActive = this.context.router.isActive
    return isActive('/', true) ? '/' :
           isActive('/signup', true) ? '/signup' :
           isActive('/login', true) ? '/login' : '/'
  }

  handleChange (value) {
    this.context.router.push(value)
    this.setState({tabIndex: value})
  }
  render () {
    return (
      <div>
          <Tabs onChange = {e => this.handleChange(e)} value = {this.state.tabIndex}>
             <Tab label='Home' value = "/" />
             <Tab label='Sign Up' value = "/signup" />
             <Tab label='Log In' value = "/login" />
         </Tabs>
      </div>
    )
  }
}

NavBar.contextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
  router: React.PropTypes.object.isRequired
}

export default NavBar
