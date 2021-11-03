/* eslint-disable linebreak-style */
import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Cell = styled.div`
  height: 4rem;
  width: 15.4rem;
  background-color: #1E2537;
  color: #fff;
  font-weight: 600;
  font-size: 1.5rem;
  text-align: center;
  vertical-align: middle;
  line-height: 4rem;
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
