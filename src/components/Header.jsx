/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const Navigation = styled.header`
  display: flex;
  justify-content: space-between;
  line-height: 50px;
  margin: 0 2.5rem;
  align-items: center;
  font-size: .5rem;
`;
const Logo = styled.div`
  width: 75px;
  height: 18px;
  `;
const Links = styled.div`
  display: flex;
  justify-content: space-between;
  width: 8.05rem;
`;
const Img = styled.img`
  display: flex;
  height: 100%;
`;

const Header = () => (
  <Navigation>
    <Link to="/">
      <Logo>
        <Img src="images/logo.svg" alt="reddit logo" />
      </Logo>
    </Link>
    <Links>
      <Link to="/search">
        Search
      </Link>
      <Link to="/#how-it-works">
        How it works
      </Link>
      <Link to="/#about">
        About
      </Link>
    </Links>
  </Navigation>
);

export default Header;
