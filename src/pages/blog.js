import React from 'react'
import Link from 'gatsby-link'

const BlogPage = ({data : {
    allWordpressPost: {
        edges
    }
}}) => (
    <div>
        {
            edges.map(({node: {title, slug}}) => {
                return (
                    <div>
                        <h1>
                            {title}
                        </h1>
                        <Link
                            to={`/blog/${slug}`}
                        >
                            Link to post
                        </Link>
                    </div>
                )
            })
        }
    </div>
)

export default BlogPage

export const query = graphql`
  query MyPosts {
  allWordpressPost {
    edges {
      node {
        id
        slug
        title
        content
        excerpt
        date
        modified
      }
    }
  }
}
`;
