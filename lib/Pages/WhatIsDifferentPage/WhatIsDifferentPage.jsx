import React from 'react'

import Page from '../Page/Page.jsx'

class WhatIsDifferentPage extends React.Component {
  render() {
    return (
      <Page
        id='what-is-different'
        nextTo='/prerequisites'
        nextToText='Prerequisites'
        previousTo='/what-is-react'
        previousToText="What's React?"
      >
        <h1>What's different about it?</h1>

        <h4>Great Developer Community &amp; Tools</h4>
        <ul>
          <li>ESLint Support</li>
          <li>Chrome / Firefox Developer Tools Plugin</li>
          <li>Verbose Warnings and Errors</li>
          <li>Modules / Plugins / Tests for Everything</li>
          <li>Discord Community</li>
        </ul>

        <h4>Unidirectional Data Flow</h4>
        <ul>
          <li>Data flows in one direction: <code>Parent &rarr; Child</code></li>
          <li>One-way street vs. Two-way street</li>
          <li><code>Props</code> and <code>State</code></li>
        </ul>

        <h4>Composition over Inheritance</h4>
        <ul>
          <li>Inline with ES2015 classes, HTML5, and CSS3 (no mixins).</li>
          <li>
            Prevents the <a href='https://en.wikipedia.org/wiki/Multiple_inheritance#The_diamond_problem'>Diamond Problem</a> of multiple inheritance.
          </li>
          <li>Reusable Components</li>
        </ul>

        <h4>Virtual DOM</h4>
        <ul>
          <li>Fast and atomic</li>
          <li>React Elements have <i>4 properties</i> and <i>0 methods</i>.</li>
          <li><code>Object.keys(Element.prototype).length = 72</code></li>
        </ul>

        <h4>JSX</h4>
        <pre>
          <code className='language-jsx'>{
            [
              'class TitlePage extends React.Component {'
            , '  render() {'
            , '    return ('
            , '      <Page>'
            , '        <h1>React 101</h1>'
            , '        <p>This may look scary at first... but trust me.</p>'
            , '      </Page>'
            , '    )'
            , '  }'
            , '}'
            ].join('\n')
          }</code>
        </pre>
      </Page>
    )
  }
}

export default WhatIsDifferentPage
