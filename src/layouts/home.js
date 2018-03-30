import React from 'react'
import PropTypes from 'prop-types'

import Header from '../components/Header'
import Helmet from '../components/Helmet';
import Social from '../components/Social';
import FlexDiv from "../components/styled/flexDiv";

import './home.css'

const TemplateWrapper = ({ children }) => (
  <FlexDiv>
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
        {children()}

    </div>
    <Social/>
  </FlexDiv>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper