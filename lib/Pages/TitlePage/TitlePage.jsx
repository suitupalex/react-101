import React from 'react'

import Page from '../Page/Page.jsx'
import logo from './logo.png'

import './titlePage.sass'

class TitlePage extends React.Component {
  render() {
    return (
      <Page
        id='title-page'
        nextTo='/what-is-react'
        nextToText='What is React?'
      >
        <h1>
          <img src={logo}/>
          React 101
        </h1>
        <p>A presentation on the basics of ReactJS using ReactJS.</p>
      </Page>
    )
  }
}

export default TitlePage
