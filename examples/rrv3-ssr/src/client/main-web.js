import 'core-js'
import React from 'react'
import { hydrate } from 'react-dom'
import { browserHistory, Router } from 'react-router'

// eslint-disable-next-line import/no-extraneous-dependencies
import { loadableReady } from '@loadable/component'
import App from './App'

import getRoutes from '../shared/getRoutes'

const Root = () => (
  <Router history={browserHistory}>{getRoutes()}</Router>
)

loadableReady(() => {
  const root = document.getElementById('main')
  hydrate(<Root />, root)
})
