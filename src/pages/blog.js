import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import Arrow from '@fortawesome/fontawesome-free-solid/faLongArrowAltRight';

import { media } from "../components/styled/media";

const PostList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const Post = styled.div`
    width: 45%;
    height: 40vh;
    ${ media.modile`
        width: 95%;
        height: 65vh;
    `}
    margin: 20px 20px 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    .post-title {
      font-size: 22px;
      line-height: 1em;
      font-weight: 400;
    }
    .post-excerpt {
      font-size: 14px;
      letter-spacing: .02em;
      line-height: 1.6em;
      color: rgb(136, 136, 136);
      margin-top: 10px;
      margin-bottom: 10px;
    }
`;

const FeaturedImage = styled.img`
    max-width:100%;
    max-height:65%;
    object-fit: cover;
`;

const ReadMore = styled(Link)`
  font-family: 'Homemade Apple', cursive;
  opacity: 0.7;
  :hover {
    opacity: 1;
  }
  svg {
    margin-left: 10px;
  }
`;

const WithLink = ({className: addClassName, link, children}) => {
    return (
        <Link
            to={link}
            className={addClassName}
        >
            {children}
        </Link>
    );
};

const renderPostSummary = post => {
    const link = `/blog/${post.slug}`;
    return (
        <Post
            key={post.slug}
        >
            <FeaturedImage src={post.featuredImage} />
            <WithLink
                link={link}
                className="post-title"
            >
                {post.title}
            </WithLink>
            <span
                className="post-excerpt"
                dangerouslySetInnerHTML={{__html: post.excerpt.replace('<p>', '').replace('</p>', '')}}
            />
            <span>
                <ReadMore
                    className="post-link"
                    to={link}
                >
                    Read More
                    <FontAwesomeIcon
                        icon={Arrow}
                        color="black"
                    />
                </ReadMore>
            </span>
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
