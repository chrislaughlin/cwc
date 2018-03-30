import React from 'react'
import PropTypes from 'prop-types'

import Header from '../components/Header/index';
import Helmet from '../components/Helmet/index';
import './home.css'

const PostsTemplate = ({ children }) => (
    <div>
        <Helmet />
        <Header />
        <div>
            {children()}
        </div>
    </div>
)

PostsTemplate.propTypes = {
    children: PropTypes.func,
}

export default PostsTemplate