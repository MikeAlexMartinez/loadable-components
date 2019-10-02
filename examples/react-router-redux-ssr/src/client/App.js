import React from 'react'
import { Route, IndexRoute } from 'react-router'

// eslint-disable-next-line import/no-extraneous-dependencies
// import loadable from '@loadable/component'
// import './main.css'

import Layout from './components/containers/Layout'
// import Header from './components/common/Header/Header'
// import Footer from './components/common/Footer/Footer'

import A from './components/letters/A'
import B from './components/letters/B'

// const A = loadable(() => import('./components/letters/A'))
// const C = loadable(() => import(/* webpackPreload: true */ './components/letters/C'))
// const D = loadable(() => import(/* webpackPrefetch: true */ './components/letters/D'))
// const E = loadable(() => import('./components/letters/E'), { ssr: false })
// const X = loadable(props => import(`./components/letters/${props.letter}`))
// const Sub = loadable(props => import(`./components/letters/${props.letter}/file`))
// const RootSub = loadable(props => import(`./components/letters/${props.letter}/file`))

// We keep some references to prevent uglify remove
// A.C = C
// A.D = D

// const Moment = loadable.lib(() => import('moment'))

const App = () => (
  <Route path="/" component={Layout}>
    <IndexRoute component={A} />
    <Route path="test" component={B} />
    {/* <B />
    <br />
    <X letter="A" />
    <br />
    <X letter="F" />
    <br />
    <E />
    <br />
    <Sub letter="Z" />
    <br />
    <RootSub letter="Y" />
    <Moment>{moment => moment().format('HH:mm')}</Moment> */}
  </Route>
)

export default App
