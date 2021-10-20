import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const FootNav = styled.footer`
  display: flex;
  justify-content: space-between;
  height: 50px;
  margin: 0 7.84rem;
  align-items: center;
  font-size: .42rem;
`;
const FootLink = styled.div`
  width: 3.5rem;
  
`;
const RedditLogo = styled.div`
  width: 1.1rem
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
      <RedditLogo>
        <Img src="images/redditIcon.svg" alt="reddit icon" />
      </RedditLogo>
    </Link>
    <FootLink>
      <Link to="/terms" style={{ float: 'right' }}>
        Terms & Privacy
      </Link>
    </FootLink>
  </FootNav>
);

export default Footer;
