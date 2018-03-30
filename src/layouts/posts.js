import React from 'react'
import PropTypes from 'prop-types'

import Header from '../components/Header/index';
import Helmet from '../components/Helmet/index';
import Social from '../components/Social';
import FlexDiv from "../components/styled/flexDiv";

import './home.css'

const PostsTemplate = ({ children }) => (
    <FlexDiv>
        <Helmet />
        <Header />
        <div>
            {children()}
        </div>
        <Social/>
    </FlexDiv>
)

PostsTemplate.propTypes = {
    children: PropTypes.func,
}

export default PostsTemplate