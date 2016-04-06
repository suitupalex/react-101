import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)

    window.app = this
  }

  render() {
    return (
      <div id='app'>
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children: React.PropTypes.any
}

export default App
