import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import './home.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Creative Wedding Company"
      meta={[
        { name: 'description', content: 'Creative Wedding Company' },
        { name: 'keywords', content: 'weddings' },
      ]}
    />
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