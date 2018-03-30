const realWeddingsQuery = `
{
  allWordpressPost(filter: { categories: { name: { eq: "REAL WEDDINGS" } } }) {
    edges {
      node {
        id
        slug
        status
        template
        format
      }
    }
  }
}
`;

exports.query = realWeddingsQuery;