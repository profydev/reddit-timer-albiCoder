/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import SROnly from './SROnly.style';
import config from '../config';
import redditIcon from '../images/logo.svg';
import hamburgerButtonImage from '../images/icon-hamburger.svg';
import closeButtonImage from '../images/icon-close.svg';

const Navigation = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10rem;
  padding: 0 8rem;
  @media (max-width: 30em) {
    padding: 0 1rem;
  }
`;
const Logo = styled.div`
  width: 15rem;
  height: 3.6rem;
`;
const Links = styled.div`
  display: flex;
  justify-content: space-between;
  width: 26rem;
  letter-spacing: .05rem;
  font-size: 1.5rem;
  & > a {
    color: inherit;
  }
  @media (max-width: 55em) {
    flex-direction: column;
    height: 100vh;
    top: 0;
    right: 0;
    width:  min(70vw, 36rem);
    position: fixed;
    justify-content: flex-start;
    padding-top: 10rem;
    background: rgba(0, 0, 0, 0.85);
    z-index: 1000;
    gap: 6rem;
    padding-left: 3rem;
    font-size: 2rem;
    color: #f4f4f4;
    font-weight: 700;
    
    transform: translateX(${({ open }) => (open ? '0%' : '100%')});
    transition: transform 500ms ease-in-out;
  }
  @supports (backdrop-filter: blur(1rem)) {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(1.5rem);
    color: black;
  }
`;
const Img = styled.img`
  display: flex;
  height: 100%;
`;
const HamburgerButton = styled.button`
  z-index: 2000;
  display: none;
  position: absolute;
  border: 0;
  background: transparent;
  right: 6rem;
  width: 3rem;
  aspect-ratio: 1;
  background-repeat: no-repeat;
  background-image: url(${({ open }) => (!open ? hamburgerButtonImage : closeButtonImage)});
  @media (max-width: 30rem) {
    right: 1rem;
  }
  @media (max-width: 55em) {
    display: block;
  }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Navigation>
      <Link to="/">
        <Logo>
          <Img src={redditIcon} alt="reddit logo" />
        </Logo>
        <SROnly>logo.svg</SROnly>
      </Link>
      <HamburgerButton
        aria-expanded={menuOpen}
        open={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <SROnly>Menu</SROnly>
      </HamburgerButton>
      <Links open={menuOpen}>
        <Link to={`/search/${config.defaultSubreddit}`}>
          Search
        </Link>
        <a href="/#how-it-works">
          How it works
        </a>
        <a href="/#about">
          About
        </a>
      </Links>
    </Navigation>
  );
};

export default Header;
