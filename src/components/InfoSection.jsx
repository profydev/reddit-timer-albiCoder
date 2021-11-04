/* eslint-disable linebreak-style */
import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Posts = styled.article`
  display: flex;
  flex-direction: column;
  font-size: clamp(.75rem, 1vw + 1rem, 1.6rem);
  gap: min(7.5rem, 6vw);
  color: #93918F;
  line-height: 2.88rem;
  align-items: center;
  position: relative;
  margin-top: 20vh;
  left: -2.5rem;
  margin-bottom: 9.4vh;
`;
const PostCard = styled.div`
  width: min(65ch, 100% - 8rem);
`;
const CardTitle = styled.span`
  font-size: 2.4rem;
  line-height: 6.5rem;
  font-family: 'Bitter';
  color: #000;
`;
const CardContent = styled.div`
  top: -1rem;
  position: relative;
`;

const Post = ({ id, title, children }) => (
  <PostCard id={id}>
    <CardTitle>{title}</CardTitle>
    <br />
    <CardContent>{children}</CardContent>
  </PostCard>
);

Post.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

const InfoSection = () => (
  <Posts>
    <Post id="how-it-works" title="How it works">
      <p>
        • We find the 500 top posts from the past year for a subreddit.
        <br />
        • The data is visualized in a heatmap grouped by weekday and hour of the day.
        <br />
        • See immediately when to submit your reddit post.
      </p>
    </Post>
    <Post id="about" title="About">
      <p>
        This app was created during a course on
        {' '}
        <a href="https://profy.dev">
          profy.dev
        </a>
        {' '}
        with the goal to implement a
        pixel-perfect real-world application with professional workflows and tools like Kanban,
        Asana, Zeplin, GitHub, pull requests and code reviews.
        {' '}
        <a href="https://profy.dev/employers">Click here for more information.</a>
        {' '}
      </p>
    </Post>
  </Posts>
);

export default InfoSection;
