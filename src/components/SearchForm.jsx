/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useParams, useHistory } from 'react-router';

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
const SearchButton = styled.button`
font-size: 1.4rem;
background-color: #FDB755;
border-radius: .5rem;
color: #f4f4f4;
border: solid .2rem #fdb755;
padding: .9rem 1.5rem .7rem 1.5rem;
font-weight: 500;
cursor: pointer;
position: relative;
text-transform: uppercase;
`;

const SearchForm = () => {
  const params = useParams();
  const history = useHistory();
  const [subreddit, setSubreddit] = useState(params.subreddit);

  function handleSubmit(event) {
    event.preventDefault();
    history.push(`/search/${subreddit}`);
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
        <SearchButton onClick={handleSubmit}>
          Search
        </SearchButton>
      </Form>
    </div>
  );
};

export default SearchForm;
