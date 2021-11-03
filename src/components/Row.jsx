/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable quote-props */
import React, { memo } from 'react';
import styled from '@emotion/styled';
// import PropTypes from 'prop-types';

import Cell from './Cell';

const Wrapper = styled.div`
  display: flex;
`;

const hours = ['12:00am', '1:00am', '2:00am', '3:00am', '4:00am', '5:00am', '6:00am',
  '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm',
  '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm', '9:00pm', '10:00pm', '11:00pm'];
const Row = ({ data, setSelectedData }) => (
  <Wrapper>
    {
      hours.map((hour) => (
        <Cell key={hour} data={data ? data[hour] : null} setSelectedData={setSelectedData} />
      ))
    }
  </Wrapper>
);
// Row.propTypes = {
//   data: PropTypes.objectOf(PropTypes.shape({
//     '12:00am': PropTypes.arrayOf(PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       author: PropTypes.string.isRequired,
//       permalink: PropTypes.string.isRequired,
//       title: PropTypes.string.isRequired,
//       score: PropTypes.number.isRequired,
//       num_comments: PropTypes.number.isRequired,
//       time: PropTypes.string.isRequired,
//       day: PropTypes.string.isRequired,
//     })),
//   })),
//   // setCurrent: PropTypes.func.isRequired,
// };

export default memo(Row);
