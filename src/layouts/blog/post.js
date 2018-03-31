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