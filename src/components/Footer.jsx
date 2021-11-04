/* eslint-disable linebreak-style */
import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import redditIcon from '../images/redditIcon.svg';

const FootNav = styled.footer`
  display: flex;
  justify-content: space-between;
  height: 10rem;
  align-items: center;
  padding: 0 25rem;
  font-size: 1.4rem;
`;
const FootLink = styled.div`
  width: 11rem;
`;
const Img = styled.img`
  width: 100%;
`;

const Footer = () => (
  <FootNav>
    <FootLink>
      <a href="https://profy.dev/employers">
        profy.dev
      </a>
    </FootLink>
    <Link to="/">
      <div>
        <Img src={redditIcon} alt="reddit icon" />
      </div>
    </Link>
    <FootLink>
      <Link to="/terms" style={{ float: 'right' }}>
        Terms & Privacy
      </Link>
    </FootLink>
  </FootNav>
);

export default Footer;
