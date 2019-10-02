import React from "react"

import Header from '../common/Header/Header'
import Footer from '../common/Footer/Footer'

const Layout = ({ children }) => (
  <div>
    <Header title="Loadable Components" />
    {children}
    <Footer />
  </div>
)

export default Layout
