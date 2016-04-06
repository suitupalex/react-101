import React from 'react'

import Page from '../Page/Page.jsx'

class ResourcesPage extends React.Component {
  render() {
    return (
      <Page
        id='resources'
        previousTo='/prerequisites'
        previousToText='Prerequisites'
      >
        <h1>Resources</h1>

        <div className='row'>
          <div className='col m12 l6'>
            <h4>React</h4>
            <ul>
              <li>
                <a href='https://facebook.github.io/react/'>
                  Official React Website
                </a>
              </li>
              <li>
                <a href='http://join.reactiflux.com'>
                  React Discord
                </a>
              </li>
              <li>
                <a href='http://reactfordesigners.com/labs/reactjs-introduction-for-people-who-know-just-enough-jquery-to-get-by/'>
                  React.js Introduction For People Who Know Just Enough jQuery
                  To Get By
                </a>
              </li>
              <li>
                <a href='https://survivejs.com/webpack_react/introduction/'>
                  Webpack and React
                </a>
              </li>
              <li>
                <a href='http://buildwithreact.com/'>
                  Build With React
                </a>
              </li>
            </ul>
          </div>
          <div className='col m12 l6'>
            <h4>ECMAScript 2015</h4>
            <ul>
              <li>
                <a href='http://www.ecma-international.org/ecma-262/6.0/'>
                  Official ECMAScript 2015 Spec
                </a>
              </li>
              <li>
                <a href='https://babeljs.io/docs/learn-es2015/'>
                  Learn ES2015
                </a>
              </li>
              <li>
                <a href='http://es6-features.org/#Constants'>
                  ECMAScript 2015 - New Features: Overview &amp; Comparison
                </a>
              </li>
              <li>
                <a href='http://kangax.github.io/compat-table/es6/'>
                  ES2015 Compatibility Table
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='row'>
          <div className='col m12 l6'>
            <h4>Node &amp; npm</h4>
            <ul>
              <li>
                <a href='https://nodejs.org'>
                  Official Node Website
                </a>
              </li>
              <li>
                <a href='https://npmjs.org'>
                  Official npm Website
                </a>
              </li>
              <li>
                <a href='http://blog.modulus.io/absolute-beginners-guide-to-nodejs'>
                  An Absolute Beginner's Guide to Node.js
                </a>
              </li>
            </ul>
          </div>
          <div className='col m12 l6'>
            <h4>Babel &amp; Webpack</h4>
            <ul>
              <li>
                <a href='https://babeljs.io/'>
                  Official Babel Site
                </a>
              </li>
              <li>
                <a href='https://webpack.github.io'>
                  Official Webpack Site
                </a>
              </li>
              <li>
                <a href='https://www.pubnub.com/blog/2015-07-30-introduction-to-babel-javascript-compiler-for-es6/'>
                  Introduction to Babel
                </a>
              </li>
              <li>
                <a href='https://webpack.github.io/docs/list-of-tutorials.html'>
                  List of Webpack Tutorials
                </a>
              </li>
              <li>
                <a href='http://code.hootsuite.com/webpack-101/'>
                  Webpack 101: An Introduction to Webpack
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Page>
    )
  }
}

export default ResourcesPage
