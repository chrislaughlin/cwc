import React from 'react'
import PropTypes from 'prop-types'

import Header from '../components/Header'
import Helmet from '../components/Helmet';
import './home.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
        HOME LAYOUT
        {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper