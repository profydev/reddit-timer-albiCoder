/* eslint-disable linebreak-style */
/* eslint-disable quote-props */
import React, { useState } from 'react';
import * as S from '../components/Styled.components';

import SearchForm from '../components/SearchForm';
import HeatMap from '../components/HeatMap';
import LoadingBox from '../components/LoadingBox';
import Table from '../components/Table';

const Search = () => {
  const [subredditData, setSubredditData] = useState(null);
  const [selectedData, setSelectedData] = useState(null);
  return (
    <S.PageWrapper>
      <SearchForm setSearchData={setSubredditData} />
      {!subredditData && <LoadingBox />}
      {subredditData && <HeatMap searchData={subredditData} setSelectedData={setSelectedData} />}
      {selectedData && <Table data={selectedData} />}
    </S.PageWrapper>
  );
};

export default Search;
