import React from 'react'

import Page from '../Page/Page.jsx'

class WhatIsReactPage extends React.Component {
  render() {
    return (
      <Page
        id='what-is-react'
        nextTo='/what-is-different'
        nextToText="What's different?"
        previousTo='/'
        previousToText="Title Page"
      >
        <h1>What is React?</h1>
        <ul>
          <li>A frontend framework for building user interfaces.</li>
          <li>Founded and maintained by Facebook.</li>
          <li>Competitors: Backbone, Angular, Ember</li>
        </ul>
      </Page>
    )
  }
}

export default WhatIsReactPage
