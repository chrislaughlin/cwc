import React from 'react'
import Link from 'gatsby-link'
import styled, { css } from 'styled-components';

import FlexDiv from '../components/styled/flexDiv';
import {media} from "../components/styled/media";

const narrow = css`
  width: 45%;
  height: 40vh;
`;

const wide = css`
  width: 95%;
  height: 40vh;
`

const Weddings = styled(FlexDiv)`
  flex-wrap: wrap;
  flex-direction: row;
  .wedding {
    margin: 10px;
    ${narrow}
  }
  .wedding:nth-child(3n) {
    ${wide}
  }
`;

const Wedding = styled.div`
  overflow: hidden;
  position: relative;  
  ${ media.modile`
        width: auto !important;
    `}
`;

const FeaturedImage = styled.img`
    height: 100%;
    width: 100%;
    :hover {
      opacity: 0.5;
    }
`;

const Title = styled.span`
    z-index: 1;
    position: absolute;
    bottom: 15px;
    right: 10px;
    color: white;
    font-size: 26px;
    letter-spacing: 4px;
    line-height: 40px;
    text-align: right;
    text-transform: uppercase;
    width: 50%;
    background-color: #08080859;
`;

const WeddingsPage = ({data : {
    allWordpressPost: {
        edges
    }
}}) => (
    <Weddings>
        {
            edges.map(({node: {slug, title, featured_media: { source_url }}}) => {
                return (
                    <Wedding
                        key={source_url}
                        className="wedding"
                    >
                        <Link
                            to={`weddings/${slug}`}
                        >
                            <Title
                                dangerouslySetInnerHTML={{__html: title}}
                            />
                            <FeaturedImage
                                src={source_url}
                            />
                        </Link>
                    </Wedding>
                )
            })
        }
    </Weddings>
);

export default WeddingsPage;

export const query = graphql`
  query Weddings {
  allWordpressPost(filter: { categories: { name: { eq: "REAL WEDDINGS" } } }) {
    edges {
      node {
        slug
        title
        featured_media {
          source_url
        }
      }
    }
  }
}
`;
