import 'core-js'
import React from 'react'
import { hydrate } from 'react-dom'

import { Router, browserHistory } from 'react-router'

// eslint-disable-next-line import/no-extraneous-dependencies
import { loadableReady } from '@loadable/component'
import Routes from './App'

const ClientSideApp = () => (
  <Router routes={Routes} history={browserHistory} />
)

loadableReady(() => {
  const root = document.getElementById('main')
  hydrate(<ClientSideApp />, root)
})
