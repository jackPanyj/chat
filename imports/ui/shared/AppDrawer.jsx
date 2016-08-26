import React, { Component } from 'react'
import Drawer from 'material-ui/Drawer'
import { List, ListItem, MakeSelectable } from 'material-ui/List'
import { white, blue, pink } from '../styles/colors';
import typography from '../styles/typography';
const SelectableList = MakeSelectable(List)
let styles = {
  header: {
    fontSize: typography.fontMiddleSize,
    color: white,
    lineHeight: '64px',
    fontWeight: typography.fontWeightNormal,
    backgroundColor: blue,
    paddingLeft: '24px',
    paddingTop: '0px',
    marginBottom: '8px',
  },
  selectedList: {
    color: pink,
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
  }
}
class AppDrawer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false,
      listIndex: ''
    }
  }

  getSelectedIndex () {
    const isActive = this.context.router.isActive
    return isActive('/', true) ? '/' :
           isActive('/signup', true) ? '/signup' :
           isActive('/login', true) ? '/login' : '/'
  }

  componentDidMount() {
    this.setState({
      listIndex: this.getSelectedIndex()
    })
  }

  componentWillReceiveProps() {
    this.setState({
      listIndex: this.getSelectedIndex()
    })
  }

  render () {
    return (
      <Drawer open={this.state.open}
               docked={false}
               onRequestChange={this.handleRequestChange.bind(this)}>
        <div style={styles.header}>
          Chat Room Demo
        </div>
        <SelectableList
          selectedItemStyle = {styles.selectedList}
          value = {this.state.listIndex}
          onChange = {this.handleChange.bind(this)}
        >
          <ListItem value='/' primaryText='Home' />
          <ListItem value='/signup' primaryText='Sign up' />
          <ListItem value='/login' primaryText='Log in' />
        </SelectableList>
      </Drawer>
    )
  }
  handleRequestChange (open) {
    this.setState({open: open})
  }
  handleToggle () {
    this.setState({open: !this.state.open})
  }
  handleChange (e, index) {
    this.context.router.push(index)
    this.setState({
      open: false,
      listIndex: index
    })
  }
}
AppDrawer.contextTypes = {
  router: React.PropTypes.object.isRequired
};
export default AppDrawer
