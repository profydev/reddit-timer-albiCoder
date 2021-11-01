/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useParams } from 'react-router';

import * as S from './Styled.components';

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
  const params = useParams();
  const [subreddit, setSubreddit] = useState(params.subreddit);

  function handleSubmit() {

  }
  function handleChange(event) {
    setSubreddit(event.target.value);
  }

  useEffect(() => {
    setSubreddit(params.subreddit);
  }, [params.subreddit]);

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
