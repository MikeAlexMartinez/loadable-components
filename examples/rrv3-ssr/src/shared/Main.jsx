import React from 'react'

const Main = ({ children }) => (
  <div>
    <div>Main component Header</div>
    <br />
    {children}
    <br />
    <div>Main Footer</div>
  </div>
)

export default Main;
