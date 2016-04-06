import React from 'react'
import {Link} from 'react-router'

import './nav-link.sass'

class NavLink extends React.Component {
  render() {
    const props = this.props

    return (
      <Link {...props}>
        {props.children}
      </Link>
    )
  }
}

NavLink.propTypes = {
  children: React.PropTypes.any
, to: React.PropTypes.string.isRequired
}

export default NavLink
