import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'

import App from './lib/App/App.jsx'
import TitlePage from './lib/Pages/TitlePage/TitlePage.jsx'
import WhatIsReactPage from './lib/Pages/WhatIsReactPage/WhatIsReactPage.jsx'
import WhatIsDifferentPage from './lib/Pages/WhatIsDifferentPage/WhatIsDifferentPage.jsx'
import PrerequisitesPage from './lib/Pages/PrerequisitesPage/PrerequisitesPage.jsx'
import ResourcesPage from './lib/Pages/ResourcesPage/ResourcesPage.jsx'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={TitlePage}/>
      <Route path='what-is-react' component={WhatIsReactPage}/>
      <Route path='what-is-different' component={WhatIsDifferentPage}/>
      <Route path='prerequisites' component={PrerequisitesPage}/>
      <Route path='resources' component={ResourcesPage}/>
    </Route>
  </Router>
, document.body.querySelector('#container')
)
