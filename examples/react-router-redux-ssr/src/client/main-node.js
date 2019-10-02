import React from 'react'
import { RouterContext } from 'react-router'

import App from './App'

const ServerSideApp = ({ url }, context ) => (
  <RouterContext
    location={url}
    context={context}
  >
    <App />
  </RouterContext>
);

export default ServerSideApp
