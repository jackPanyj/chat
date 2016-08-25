import React, {Component} from 'react'
import NavBar from './shared/NavBar.jsx'
class Home extends Component {
  render () {
    return (
      <div>
        <NavBar />
        {this.props.children}
      </div>
    )
  }
}

export default Home
