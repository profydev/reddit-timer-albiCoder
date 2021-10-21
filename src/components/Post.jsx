import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Wrapper = styled.div`

`;
const PostTitle = styled.h2`

`;
const PostContent = styled.p`

`;
const Post = ({ title, content }) => (
  <Wrapper>
    <PostTitle>
      {title}
    </PostTitle>
    <PostContent>
      {content}
    </PostContent>
  </Wrapper>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Post;
