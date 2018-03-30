import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';

const PostList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const Post = styled.div`
    width: 45%;
    height: 40vh;
    margin: 20px;
    display: flex;
    flex-direction: column;
`;

const FeaturedImage = styled.img`
    max-width:100%;
    max-height:65%;
    object-fit: cover;
`;

const renderPostSummary = post => {
    return (
        <Post
            key={post.slug}
        >
            <FeaturedImage src={post.featuredImage} />
            <h3
                className="post-title"
            >
                {post.title}
            </h3>
            <p
                className="post-excerpt"
                dangerouslySetInnerHTML={{__html: post.excerpt}}
            />
            <Link
                className="post-link"
                to={`/blog/${post.slug}`}
            >
                Link to post
            </Link>
        </Post>
    )
}

const BlogPage = ({data : {
    allWordpressPost: {
        edges
    }
}}) => (
    <PostList>
        {
            edges.map((
                {node: {
                    title,
                    slug,
                    excerpt,
                    featured_media: {
                        source_url
                    }
                }}
            ) => {
                return renderPostSummary({
                    title,
                    slug,
                    featuredImage: source_url,
                    excerpt
                });
            })
        }
    </PostList>
)

export default BlogPage

export const query = graphql`
  query BlogPosts {
  allWordpressPost(filter: { categories: { name: { eq: "BLOG" } } }) {
    edges {
      node {
        slug
        title
        excerpt
        date
        modified,
        featured_media {
          source_url
        }
      }
    }
  }
}
`;
