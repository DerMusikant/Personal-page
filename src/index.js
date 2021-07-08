import React, {Suspense} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ReactDOM from 'react-dom'

import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'

const Layout = React.lazy(()=>import('./components/Layout'))

ReactDOM.render(
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='*' component={NotFound} />
        </Switch>
      </Layout>
    </Suspense>
  </Router>

  , document.getElementById('root'))
