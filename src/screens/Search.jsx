/* eslint-disable linebreak-style */
/* eslint-disable quote-props */
import React, { useState } from 'react';
import RingLoader from 'react-spinners/RingLoader';

import * as S from '../components/Styled.components';
import SearchForm from '../components/SearchForm';
import HeatMap from '../components/HeatMap';
import Table from '../components/Table';

const Search = () => {
  const [subredditData, setSubredditData] = useState(null);
  const [selectedData, setSelectedData] = useState(null);
  return (
    <S.SearchPageContentWrapper>
      <SearchForm setSearchData={setSubredditData} />
      <RingLoader loading={!subredditData} color="#fdb755" size="10rem" width="100rem" role="progressbar" aria-valuetext="loading spinner" />
      {subredditData && <HeatMap searchData={subredditData} setSelectedData={setSelectedData} />}
      {selectedData && <Table data={selectedData} />}
    </S.SearchPageContentWrapper>
  );
};

export default Search;
