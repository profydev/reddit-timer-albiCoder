/* eslint-disable linebreak-style */
import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Cell = styled.div`
  height: min(4rem, 2.5vw);
  width: min(15.4rem, 9.625vw);
  background-color: #1E2537;
  color: #fff;
  font-weight: 600;
  font-size: clamp(.1rem, .1rem + 1vw, 1.5rem);
  line-height: min(4rem, 2.5vw);
  text-align: center;
  vertical-align: middle;
`;
const DayCell = ({ name }) => (
  <Cell>
    {name}
  </Cell>
);
DayCell.propTypes = {
  name: PropTypes.string.isRequired,
};

const DaysColumn = () => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return (
    <Wrapper>
      {days.map((item) => <DayCell key={item} name={item} />)}
    </Wrapper>
  );
};

export default DaysColumn;
