import React from 'react'
import PropTypes from 'prop-types'
// import './Header.css'

const Header = ({ title }) => (
  <div className="title-container">
    <h1>{title}</h1>
  </div>
)

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
