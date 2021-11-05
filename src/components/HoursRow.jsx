/* eslint-disable linebreak-style */
import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  border: .1rem solid #f3f3f3;
  height: min(5.2rem, 3.25vw);
`;
const Cell = styled.div`
  width: min(8rem, 5vw);
  background: linear-gradient(#FEFEFE, #E9E9E9);
  text-align: center;
  vertical-align: middle;
  line-height: min(5.2rem, 3.25vw);
  font-size: clamp(.1rem, .1rem + 1vw, 1.4rem);
  font-weight: 600;
  color: #787878;
  @media (max-width: 45em) {
    width: 7vw;
    height: 7vw;
    line-height: 4.55vw;
  }
`;

const HourCell = ({ hour }) => (
  <Cell>
    {hour}
  </Cell>
);
HourCell.propTypes = {
  hour: PropTypes.string.isRequired,
};

const HoursRow = () => {
  const hours = ['12:00am', '2:00am', '4:00am', '6:00am', '8:00am', '10:00am', '12:00pm',
    '2:00pm', '4:00pm', '6:00pm', '8:00pm', '10:00pm'];
  return (
    <Wrapper>
      {hours.map((item) => <HourCell key={item} hour={item} />)}
    </Wrapper>
  );
};

export default HoursRow;
