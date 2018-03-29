const blogPosts = `
{
  allWordpressPost(filter: { categories: { name: { eq: "BLOG" } } }) {
    edges {
      node {
        id
        slug
      }
    }
  }
}
`;

exports.query = blogPosts;