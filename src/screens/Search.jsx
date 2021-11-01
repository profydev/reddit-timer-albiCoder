/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import * as S from '../components/Styled.components';

import SearchForm from '../components/SearchForm';

const Search = () => {
  const [searchData, setSearchData] = useState({});
  console.table(searchData);
  return (
    <S.PageWrapper>
      <SearchForm setSearchData={setSearchData} />
    </S.PageWrapper>
  );
};

export default Search;
