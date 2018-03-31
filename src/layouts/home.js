import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

import Header from '../components/Header'
import Helmet from '../components/Helmet';
import Social from '../components/Social';
import FlexDiv from "../components/styled/flexDiv";

import './home.css'

const Content = styled.div`
  width: 95%;
`;

const TemplateWrapper = ({ children }) => (
  <FlexDiv>
    <Helmet />
    <Header />
    <Content>
        {children()}
    </Content>
    <Social/>
  </FlexDiv>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper