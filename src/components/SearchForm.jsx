/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useParams, useHistory } from 'react-router';
import PropType from 'prop-types';

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

const SearchForm = ({ setSearchData }) => {
  const params = useParams();
  const history = useHistory();
  const [subreddit, setSubreddit] = useState(params.subreddit);
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  function handleChange(event) {
    setSubreddit(event.target.value);
  }

  function getTime(timestamp) {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    let formatedHour = '';
    if (hours === 0) {
      formatedHour += '12:';
      formatedHour += minutes < 10 ? `0${minutes} am` : `${minutes} am`;
    } else if (hours > 0 && hours < 12) {
      formatedHour += `${hours}:`;
      formatedHour += minutes < 10 ? `0${minutes} am` : `${minutes} am`;
    } else if (hours === 12) {
      formatedHour += '12:';
      formatedHour += minutes < 10 ? `0${minutes} pm` : `${minutes} pm`;
    } else {
      formatedHour += `${hours - 12}:`;
      formatedHour += minutes < 10 ? `0${minutes} pm` : `${minutes} pm`;
    }
    return formatedHour;
  }
  function getDay(timestamp) {
    const date = new Date(timestamp * 1000);
    const day = date.getDay();
    return days[day];
  }
  function getHour(time) {
    // get hour on format 12:00am 4:00pm
    // set minutes to 00
    // 12:18am --> 12:00am
    const indexOfColon = time.indexOf(':');
    return `${time.substring(0, indexOfColon)}:00${time.match(/(am)|(pm)/)[0]}`;
  }
  async function getData(subr) {
    const response = await fetch(`https://www.reddit.com/r/${subr}/top.json?t=year&limit=100`);
    const result = await response.json();
    // get only fields that we are interested
    const filteredFields = result.data.children.map((el) => (
      {
        author: el.data.author,
        permalink: el.data.permalink,
        title: el.data.title,
        score: el.data.score,
        num_comments: el.data.num_comments,
        time: getTime(el.data.created_utc),
        day: getDay(el.data.created_utc),
      }
    ));
    // the structure of data that are going to be displayed on heat map
    const datagrid = {
      Sunday: {
        '12:00am': [],
        '1:00am': [],
        '2:00am': [],
        '3:00am': [],
        '4:00am': [],
        '5:00am': [],
        '6:00am': [],
        '7:00am': [],
        '8:00am': [],
        '9:00am': [],
        '10:00am': [],
        '11:00am': [],
        '12:00pm': [],
        '1:00pm': [],
        '2:00pm': [],
        '3:00pm': [],
        '4:00pm': [],
        '5:00pm': [],
        '6:00pm': [],
        '7:00pm': [],
        '8:00pm': [],
        '9:00pm': [],
        '10:00pm': [],
        '11:00pm': [],
      },
      Monday: {
        '12:00am': [],
        '1:00am': [],
        '2:00am': [],
        '3:00am': [],
        '4:00am': [],
        '5:00am': [],
        '6:00am': [],
        '7:00am': [],
        '8:00am': [],
        '9:00am': [],
        '10:00am': [],
        '11:00am': [],
        '12:00pm': [],
        '1:00pm': [],
        '2:00pm': [],
        '3:00pm': [],
        '4:00pm': [],
        '5:00pm': [],
        '6:00pm': [],
        '7:00pm': [],
        '8:00pm': [],
        '9:00pm': [],
        '10:00pm': [],
        '11:00pm': [],
      },
      Tuesday: {
        '12:00am': [],
        '1:00am': [],
        '2:00am': [],
        '3:00am': [],
        '4:00am': [],
        '5:00am': [],
        '6:00am': [],
        '7:00am': [],
        '8:00am': [],
        '9:00am': [],
        '10:00am': [],
        '11:00am': [],
        '12:00pm': [],
        '1:00pm': [],
        '2:00pm': [],
        '3:00pm': [],
        '4:00pm': [],
        '5:00pm': [],
        '6:00pm': [],
        '7:00pm': [],
        '8:00pm': [],
        '9:00pm': [],
        '10:00pm': [],
        '11:00pm': [],
      },
      Wednesday: {
        '12:00am': [],
        '1:00am': [],
        '2:00am': [],
        '3:00am': [],
        '4:00am': [],
        '5:00am': [],
        '6:00am': [],
        '7:00am': [],
        '8:00am': [],
        '9:00am': [],
        '10:00am': [],
        '11:00am': [],
        '12:00pm': [],
        '1:00pm': [],
        '2:00pm': [],
        '3:00pm': [],
        '4:00pm': [],
        '5:00pm': [],
        '6:00pm': [],
        '7:00pm': [],
        '8:00pm': [],
        '9:00pm': [],
        '10:00pm': [],
        '11:00pm': [],
      },
      Thursday: {
        '12:00am': [],
        '1:00am': [],
        '2:00am': [],
        '3:00am': [],
        '4:00am': [],
        '5:00am': [],
        '6:00am': [],
        '7:00am': [],
        '8:00am': [],
        '9:00am': [],
        '10:00am': [],
        '11:00am': [],
        '12:00pm': [],
        '1:00pm': [],
        '2:00pm': [],
        '3:00pm': [],
        '4:00pm': [],
        '5:00pm': [],
        '6:00pm': [],
        '7:00pm': [],
        '8:00pm': [],
        '9:00pm': [],
        '10:00pm': [],
        '11:00pm': [],
      },
      Friday: {
        '12:00am': [],
        '1:00am': [],
        '2:00am': [],
        '3:00am': [],
        '4:00am': [],
        '5:00am': [],
        '6:00am': [],
        '7:00am': [],
        '8:00am': [],
        '9:00am': [],
        '10:00am': [],
        '11:00am': [],
        '12:00pm': [],
        '1:00pm': [],
        '2:00pm': [],
        '3:00pm': [],
        '4:00pm': [],
        '5:00pm': [],
        '6:00pm': [],
        '7:00pm': [],
        '8:00pm': [],
        '9:00pm': [],
        '10:00pm': [],
        '11:00pm': [],
      },
      Saturday: {
        '12:00am': [],
        '1:00am': [],
        '2:00am': [],
        '3:00am': [],
        '4:00am': [],
        '5:00am': [],
        '6:00am': [],
        '7:00am': [],
        '8:00am': [],
        '9:00am': [],
        '10:00am': [],
        '11:00am': [],
        '12:00pm': [],
        '1:00pm': [],
        '2:00pm': [],
        '3:00pm': [],
        '4:00pm': [],
        '5:00pm': [],
        '6:00pm': [],
        '7:00pm': [],
        '8:00pm': [],
        '9:00pm': [],
        '10:00pm': [],
        '11:00pm': [],
      },
    };
    days.forEach((day) => {
      filteredFields.map((el) => datagrid[day][getHour(el.time)].push(el));
    });
    // set data of heat map
    setSearchData(datagrid);
  }
  // get data
  getData(params.subreddit);

  function handleSubmit(event) {
    event.preventDefault();
    history.push(`/search/${subreddit}`);
    getData(params.subreddit);
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

SearchForm.propTypes = {
  setSearchData: PropType.func.isRequired,
};

export default SearchForm;
