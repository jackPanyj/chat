import React, {Component} from 'react'
import { Link } from 'react-router'

class NavBar extends Component {
  render () {
    return (
      <div>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/signup'>Sign Up</Link>
          <Link to='/login'>Log In</Link>
        </div>
      </div>
    )
  }
}

export default NavBar
