/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <div>
      <Link to="/">
        <img src="../../public/images/logo.svg" alt="reddit logo" />
      </Link>
      <img src="./logo.svg" alt="reddit logo" />
    </div>
    <Link to="/search">
      Search
    </Link>
    <Link to="/#how-it-works">
      How it works
    </Link>
    <Link to="/#about">
      About
    </Link>
  </header>
);

export default Header;
