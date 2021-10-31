/* eslint-disable linebreak-style */
import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import SROnly from './SROnly.style';
import config from '../config';

const HomePageContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 7rem;
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
  font-size: 3.8rem;
  top: -1rem;
  position: relative;
`;
const Subheader = styled.p`
font-size: 1.6rem;
top: -4.1rem;
  position: relative;
`;
const SearchButton = styled(Link)`
font-size: 1.4rem;
background-color: #FDB755;
border-radius: .5rem;
color: #f4f4f4;
border: solid .2rem #fdb755;
padding: .9rem 1.5rem .7rem 1.5rem;
font-weight: 500;
cursor: pointer;
position: relative;
top: -1.1rem;
`;
const JavascriptText = styled(Link)`
font-size: 1.6rem;
top: 3.5rem;
position: relative;
`;
const Table = styled(Link)`
  display: flex;
  width: 77.5%;
    top: 7rem;
    position: relative;
`;
const TableImg = styled.img`
  width: 100%;
`;

const HeroSection = () => (
  <HomePageContent>
    <Search>
      <Headline>
        No reactions to your reddit posts?
      </Headline>
      <Subheader>
        Great timing, great results! Find the best time to post on your subreddit.
      </Subheader>
      <SearchButton to={`/search/${config.defaultSubreddit}`}>
        SHOW ME THE BEST TIME
      </SearchButton>
      <JavascriptText to={`/search/${config.defaultSubreddit}`}>
        r/javascript
      </JavascriptText>
    </Search>
    <Table to={`/search/${config.defaultSubreddit}`}>
      <TableImg src="images/table.png" alt="table" />
      <SROnly>Table</SROnly>
    </Table>
  </HomePageContent>
);

export default HeroSection;
