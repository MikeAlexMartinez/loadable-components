import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Main from './Main'
import Home from './Home'
import A from '../client/letters/A'

export default function getRoutes() {
  return (
    <Route
      name="main"
      component={Main}
      path="/"
    >
      <IndexRoute component={Home} />
      <Route path="/a" component={A} />
    </Route>
  )
}