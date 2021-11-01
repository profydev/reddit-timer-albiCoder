/* eslint-disable linebreak-style */
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const Headline = styled.h3`
  font-weight: 400;
  font-family: 'Bitter';
  font-size: 3.8rem;
  top: -1rem;
  position: relative;
`;
const DefaultSubredditText = styled(Link)`
font-size: 1.6rem;
top: 3.5rem;
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
text-transform: uppercase;
`;
const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 7rem;
`;

export {
  Headline, DefaultSubredditText, SearchButton, PageWrapper,
};
