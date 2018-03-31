import React from "react"
import styled from 'styled-components';

const HOMEMADE_APPLE_FONT = 'font-family: \'Homemade Apple\', cursive;';

const Title = styled.p`
  ${HOMEMADE_APPLE_FONT};
  font-size: 29px;
  margin-bottom: 30px;
  text-align: center;
  color: #B39FB6;
`;

const Content = styled.div`
  color: #000;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 15px;
  line-height: 27px;
  letter-spacing: 0.3px;
  word-wrap: break-word;
  margin: 0 20px 0 20px;
  h1 {
    ${HOMEMADE_APPLE_FONT};
    background-color: rgba(255, 255, 255, 0);
    box-shadow: rgba(255, 255, 255, 0) 16.5616px 0px 0px 0px, rgba(255, 255, 255, 0) -16.5616px 0px 0px 0px;
    color: #B39FB6;
    font-size: 36px;
    margin-top: 20px;
    text-align: center;
  }
  h3 {
    font-size: 18px;
    font-weight: 300;
    letter-spacing: 2px;
    line-height: 19px;
    text-align: center;
    text-transform: uppercase;
  }
  p {
    font-size: 15px;
    font-weight: 300;
  }
  strong {
    font-weight: 700;
  }
  img {
    display: block;
    margin: 0 auto;
    border-radius: 5px;
  }
`;

const PostTemplate = ({
    data: {
        wordpressPost: post
    }
}) => {
    return (
        <div>
            <Title dangerouslySetInnerHTML={{__html: post.title}}/>
            <Content dangerouslySetInnerHTML={{__html: post.content}}/>
        </div>
    )
}

export default PostTemplate

export const pageQuery = graphql`
  query currentPostQuery($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
    }
  }
`