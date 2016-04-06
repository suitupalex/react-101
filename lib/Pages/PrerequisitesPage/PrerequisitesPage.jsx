import React from 'react'

import Page from '../Page/Page.jsx'

class PrerequisitesPage extends React.Component {
  render() {
    return (
      <Page
        id='prerequisites'
        nextTo='/resources'
        nextToText='Resources'
        previousTo='/what-is-different'
        previousToText="What's Different?"
      >
        <h1>Prerequisites</h1>

        <h4>Node 4/5 &amp; npm</h4>
        <ul>
          <li>Development tools are powered by node.</li>
          <li>Modules and plugins are published on npm.</li>
          <li>Manage your project with a <code>package.json</code>.</li>
        </ul>

        <h4>ECMAScript 2015</h4>
        <div className='row'>
          <div className='col s6'>
            <pre>
              <code className='language-javascript'>{
                [
                  `// ECMAScript 5`
                , null
                , `'use strict'`
                , null
                , `var moment = require('moment')`
                , null
                , `function TimeConverter(time) {`
                , `  this.time = moment(time)`
                , `}`
                , null
                , `TimeConverter.prototype.display = function display() {`
                , `  var formatted = this.time.format('hh:mm')`
                , `  return 'The time is ' + formatted`
                , `}`
                , null
                , `module.exports = TimeConverter`
                ].join('\n')
              }</code>
            </pre>
          </div>
          <div className='col s6'>
            <pre>
              <code className='language-javascript'>{
                [
                  `// ECMAScript 2015`
                , null
                , `import moment from 'moment'`
                , null
                , `class TimeConverter {`
                , `  constructor(time) {`
                , `    this.time = moment(time)`
                , `  }`
                , null
                , `  display() {`
                , `    const formatted = this.time.format('hh:mm')`
                , "    return `The time is ${formatted}`"
                , `  }`
                , `}`
                , null
                , `export default TimeConverter`
                ].join('\n')
              }</code>
            </pre>
          </div>
        </div>
        <div className='row'>
          <div className='col s6'>
            <pre>
              <code className='language-javascript'>{
                [
                  `// ECMAScript 5`
                , null
                , `'use strict'`
                , null
                , `var TimeConverter = require('./TimeConverter')`
                , null
                , `function CentralTimeConverter() {`
                , `  var argLength = arguments.length`
                , `  var args = []`
                , `  for (var i = 0; i < argLength; i++) {`
                , `    args.push(arguments[i])`
                , `  }`
                , null
                , `  TimeConverter.apply(this, args)`
                , null
                , `  this.timezone = 'CT'`
                , `}`
                , null
                , `CentralTimeConverter.prototype = new TimeConverter()`
                , `CentralTimeConverter.prototype.constructor = CentralTimeConverter`
                , null
                , `CentralTimeConverter.prototype.toET = function toET() {`
                , `  return this.time.add(1, 'hour')`
                , `}`
                , null
                , `module.exports = CentralTimeConverter`
                ].join('\n')
              }</code>
            </pre>
          </div>
          <div className='col s6'>
            <pre>
              <code className='language-javascript'>{
                [
                  `// ECMAScript 2015`
                , null
                , `import TimeConverter from 'moment'`
                , null
                , `class CentralTimeConverter extends TimeConverter {`
                , `  constructor(...args) {`
                , `    super(...args)`
                , null
                , `    this.timezone = 'CT'`
                , `  }`
                , null
                , `  toET() {`
                , `    return this.time.add(1, 'hour')`
                , `  }`
                , `}`
                , null
                , `export default CentralTimeConverter`
                ].join('\n')
              }</code>
            </pre>
          </div>
        </div>

        <h4>Babel</h4>
        <ul>
          <li>Converts ES2015 code back to ES5.</li>
          <li>Converts JSX to JS.</li>
        </ul>

        <h4>ESLint</h4>
        <ul>
          <li>Protect yourself from typos and syntax errors.</li>
          <li>Features a robust React plugin to guide your development.</li>
        </ul>

        <h4>Webpack</h4>
        <ul>
          <li>Build tool powered by <code>loaders</code>.</li>
          <li>
            Used to bundle JS, HTML, styles, images, templates, fonts, music,
            and anything else into a singular JS file.
          </li>
          <li>
            Babel loader is used to bundle JSX files.
          </li>
          <li>
            Can also do post-processing (UglifyJS, interpolation, etc.)
          </li>
        </ul>
      </Page>
    )
  }
}

export default PrerequisitesPage
