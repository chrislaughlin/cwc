import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
    <div>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <p>
            <Link to="/blog/">Go to BLOG</Link>
        </p>
        <p>
            <Link to="/weddings/">Go to Weddings</Link>
        </p>
    </div>
)

export default IndexPage
