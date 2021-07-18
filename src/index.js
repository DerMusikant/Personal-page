import React, {Suspense} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ReactDOM from 'react-dom'
import './index.css'

import Layout from './components/layout/Layout'

const
Home = React.lazy(()=>import('./pages/Home')),
About = React.lazy(()=>import('./pages/About')),
NotFound = React.lazy(()=>import('./pages/NotFound'))

ReactDOM.render(
  <Router>
    <Layout>
      <Suspense fallback={<div className='loading bg-red-main'>Loading...</div>}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='*' component={NotFound} />
        </Switch>
      </Suspense>
    </Layout>
  </Router>

  , document.getElementById('root'))
