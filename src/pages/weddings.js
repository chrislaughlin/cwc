import React from 'react'
import Link from 'gatsby-link'

const Weddings = ({data : {
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
                            to={`/weddings/${slug}`}
                        >
                            Link to post
                        </Link>
                    </div>
                )
            })
        }
    </div>
)

export default Weddings

export const query = graphql`
  query Weddings {
  allWordpressPost(filter: { categories: { name: { eq: "REAL WEDDINGS" } } }) {
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
