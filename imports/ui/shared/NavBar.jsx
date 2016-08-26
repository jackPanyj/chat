import React, {Component} from 'react'
import { Link } from 'react-router'
import { white, blue } from '../styles/colors';
import typography from '../styles/typography';
import { Tabs, Tab } from 'material-ui/Tabs'
let styles = {
      root: {
        height: '64px',
        backgroundColor: blue,
        boxShadow: '0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24)',
      },
      tabs: {
        width: '390px',
        position: 'absolute',
        right: '60px',
        textTransform: 'uppercase',
        fontFamily: typography.fontFamily
      },
      tab: {
        height: '64px',
        color: white,
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

  componentWillReceiveProps() {
    setTimeout(() => {
       this.setState({
         tabIndex: this.getSelectedIndex()
       });
     }, 0)
  }

  getSelectedIndex () {
    const isActive = this.context.router.isActive
    return isActive('/', true) ? '/' :
           isActive('/signup', true) ? '/signup' :
           isActive('/login', true) ? '/login' :
           isActive('/chat', true) ? '/chat' :
           isActive('/account', true) ? '/account' : ''
  }

  handleChange (value) {
    this.context.router.push(value)
    this.setState({tabIndex: value})
  }
  render () {
    let currentUser = this.props.currentUser
    return (
      <div style = {styles.root}>
          <Tabs onChange = {e => this.handleChange(e)}
                value = {this.state.tabIndex}
                style = {styles.tabs}
                inkBarStyle = {styles.inkBar}
                tabItemContainerStyle={{backgroundColor: 'transparent'}}
          >
             <Tab label='Home' value = "/" style={styles.tab} />
             <Tab label={currentUser ? 'account' : 'sign up'} value={currentUser ? '/account' : '/signup'} style={styles.tab} />
             <Tab label={currentUser ? 'chat' : 'login'} value = {currentUser ? '/chat' : '/login'} style={styles.tab} />
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
