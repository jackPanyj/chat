import React, {Component} from 'react'
import { Link } from 'react-router'
import { Tabs, Tab } from 'material-ui/Tabs'
let styles = {
      root: {
        height: '64px',
        backgroundColor: '#00bcd4',
        boxShadow: '0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24)',
      },
      tabs: {
        width: '390px',
        position: 'absolute',
        right: '60px',
        textTransform: 'uppercase',
      },
      tab: {
        height: '64px',
        color: '#fff',
      },
      inkBar: {
        height: '4px',
        marginTop: '-4px',
      },
}
class NavBar extends Component {

  constructor(props) {
    super(props)
    this.state = { tabIndex: '/' }
  }

  componentWillMount () {
    this.setState({ tabIndex: this.getSelectedIndex() })
  }

  componentWillReceiveProps(nextProps, nextContext, a) {
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
      <div style = {styles.root}>
          <Tabs onChange = {e => this.handleChange(e)}
                value = {this.state.tabIndex}
                style = {styles.tabs}
                inkBarStyle = {styles.inkBar}
                tabItemContainerStyle={{backgroundColor: 'transparent'}}
          >
             <Tab label='Home' value = "/" style={styles.tab} />
             <Tab label='Sign Up' value = "/signup" style={styles.tab} />
             <Tab label='Log In' value = "/login" style={styles.tab} />
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
