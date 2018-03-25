import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

const TemplateWrapper = ({ children }) => (
    <div>
        <Helmet
            title="CWC - Creative Wedding Company"
            meta={[
                { name: 'description', content: 'Creative Wedding Company' },
                { name: 'keywords', content: 'Creative, Wedding, Company' },
            ]}
        />
        <div>
            LANDING PAGE !!!!!!
            {children()}
        </div>
    </div>
)

TemplateWrapper.propTypes = {
    children: PropTypes.func,
}

export default TemplateWrapper
