/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import styled from '@emotion/styled';

import * as S from './Styled.components';
import config from '../config';

const Form = styled.form`
display: flex;
justify-content: center;
align-items: center;
width: 40vw;
`;
const InputLabel = styled.label`
  font-size: 1.6rem;
`;
const InputText = styled.input`
display: block;
    width: min(40rem, 40vw);
    height: 3rem;
    font-size: 1.5rem;
    margin: 0 1rem;
`;

const SearchForm = () => {
  const [subreddit, setSubreddit] = useState(config.defaultSubreddit);

  function handleSubmit() {

  }
  function handleChange(event) {
    setSubreddit(event.target.value);
  }

  return (
    <div>
      <S.Headline>
        Find the best time for a subreddit
      </S.Headline>
      <Form onSubmit={handleSubmit}>
        <InputLabel>
          /r
        </InputLabel>
        <InputText type="text" value={subreddit} onChange={handleChange} />
        <S.SearchButton to={`/search/${subreddit}`} onClick={handleSubmit}>
          Search
        </S.SearchButton>
      </Form>
    </div>
  );
};

export default SearchForm;
