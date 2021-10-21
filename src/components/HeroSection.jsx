/* eslint-disable linebreak-style */
import React from 'react';
import styled from '@emotion/styled';
import Post from './Post';

const HomePageContent = styled.main`
  display: flex;
  flex-direction: column;
`;
const Search = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 12.875rem;
`;
const Headline = styled.h3`
  font-weight: 400;
  font-family: 'Bitter';
  font-size: 1.188rem;
`;
const Subheader = styled.p`
  font-size: .5rem;
  top: -1rem;
  position: relative;
`;
const SearchButton = styled.button`
  font-size: .441rem;
  background-color: #FDB755;
  border-radius: .125rem;
  color: #f4f4f4;
  border: solid .2rem #fdb755;
  padding: .1rem .33rem;
  font-weight: 500;
  cursor: pointer;
`;
const JavascriptText = styled.p`
  font-size: .5rem;
  top: 1rem;
  position: relative;
`;
const Table = styled.div`
  display: none;
`;
const TableImg = styled.img`
display: none;

`;
const Posts = styled.div`
  display: none;

`;
const Post1 = {
  title: '',
  content: '',
};
const Post2 = {
  title: '',
  content: '',
};
const HeroSection = () => (
  <HomePageContent>
    <Search>
      <Headline>
        No reactions to your reddit posts?
      </Headline>
      <Subheader>
        Great timing, great results! Find the best time to post on your subreddit.
      </Subheader>
      <SearchButton>
        SHOW ME THE BEST TIME
      </SearchButton>
      <JavascriptText>
        r/javascript
      </JavascriptText>
    </Search>
    <Table>
      <TableImg src="images/table.png" alt="table" />
    </Table>
    <Posts>
      <Post title={Post1.title} content={Post1.content} />
      <Post title={Post2.title} content={Post2.content} />
    </Posts>
  </HomePageContent>
);

export default HeroSection;
