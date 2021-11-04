/* eslint-disable linebreak-style */
import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import SROnly from './SROnly.style';
import config from '../config';
import * as S from './Styled.components';
import heatMap from '../images/table.png';

const Search = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 12.875rem;
`;
const Subheader = styled.p`
  font-size: 1.6rem;
  top: -4.1rem;
  position: relative;
`;
const TableLinkImgContainer = styled(Link)`
  display: flex;
  width: 77.5%;
  top: 7rem;
  position: relative;
`;
const TableImg = styled.img`
  width: 100%;
`;

const HeroSection = () => (
  <S.PageWrapper>
    <Search>
      <S.Headline>
        No reactions to your reddit posts?
      </S.Headline>
      <Subheader>
        Great timing, great results! Find the best time to post on your subreddit.
      </Subheader>
      <S.SearchButton style={{ top: '-1.1rem' }} to={`/search/${config.defaultSubreddit}`}>
        Show me the best time
      </S.SearchButton>
      <S.DefaultSubredditText to={`/search/${config.defaultSubreddit}`}>
        {`r/${config.defaultSubreddit}`}
      </S.DefaultSubredditText>
    </Search>
    <TableLinkImgContainer to={`/search/${config.defaultSubreddit}`}>
      <TableImg src={heatMap} alt="heat map" />
      <SROnly>Table</SROnly>
    </TableLinkImgContainer>
  </S.PageWrapper>
);

export default HeroSection;
