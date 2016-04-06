import React from 'react'

import NavLink from '../../NavLink/NavLink.jsx'

import './page.sass'
import './prism-ghcolors.css'

class Page extends React.Component {
  constructor() {
    super()

    this.handleKeydown = this.handleKeydown.bind(this)
  }

  componentDidMount() {
    window.Prism.highlightAll()

    window.addEventListener('keyup', this.handleKeydown)
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeydown)
  }

  handleKeydown(event) {
    event.preventDefault()

    const props = this.props
    var location

    switch (event.keyCode) {
      case 32:
      case 39:
        location = props.nextTo
      break
      case 37:
        location = props.previousTo
      break
      default:
      return
    }

    if (!location) {
      return
    }

    document.location.href = `/#${location}`
  }

  render() {
    const props = this.props

    const nextLink = props.nextTo && props.nextToText
      ? (
          <NavLink
            className='nav-link-next'
            to={props.nextTo}
          >
            Next Up: {props.nextToText} &#8674;
          </NavLink>
        )
      : null

    const previousLink = props.previousTo && props.previousToText
      ? (
          <NavLink
            className='nav-previous'
            to={props.previousTo}
          >
            &#8672; Back To: {props.previousToText}
          </NavLink>
        )
      : null

    return (
      <section className='page flow-text' {...props}>
        <div className='container'>
          {props.children}

          <div className='nav'>{previousLink}{nextLink}</div>
        </div>
      </section>
    )
  }
}

Page.propTypes = {
  children: React.PropTypes.any
, previousTo: React.PropTypes.string
, previousToText: React.PropTypes.string
, nextTo: React.PropTypes.string
, nextToText: React.PropTypes.string
}

export default Page
