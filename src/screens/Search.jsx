/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import * as S from '../components/Styled.components';

import SearchForm from '../components/SearchForm';

const Search = () => {
  const [searchData, setSearchData] = useState({});

  async function getData(subreddit) {
    const response = await fetch(`https://www.reddit.com/r/${subreddit}/top.json?t=year&limit=100`);
    console.log(response);
  }
  // get data when the page renders
  useEffect(() => {
    getData();
  }, []);
  return (
    <S.PageWrapper>
      <SearchForm />
    </S.PageWrapper>
  );
};

export default Search;
