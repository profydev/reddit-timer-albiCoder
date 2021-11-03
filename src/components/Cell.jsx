/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
import React, { memo } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  width: 4rem;
  height: 4rem;
  text-align: center;
  vertical-align: middle;
  line-height: 4rem;
  font-size: 1.4rem;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  background-color: ${(props) => props.background_color};
  &:hover {
    border: .2rem solid black;
  }
`;

const colors = {
  yellow_green: '#E0E5A3',
  very_light: '#A9D194',
  light: '#A0CE93',
  medium_light: '#96CB94', // wrong
  medium: '#8CC894',
  regular: '#5EB391',
  heavier: '#5AAD8C',
  selected: '#3984A3',
};

const Cell = ({ data, setSelectedData }) => {
  if (!data) return;
  const { length } = data;
  const selected = false;
  const max = 11;
  function getColor(maxValue, cellValue, isSelected) {
    const heap = Math.ceil(maxValue / 6);
    if (isSelected) {
      return colors.selected;
    } if (cellValue === 0) {
      return colors.yellow_green;
    } if (cellValue <= heap) {
      return colors.very_light;
    } if (cellValue <= heap * 2) {
      return colors.light;
    } if (cellValue <= heap * 3) {
      return colors.medium_light;
    } if (cellValue <= heap * 4) {
      return colors.medium;
    } if (cellValue <= heap * 5) {
      return colors.regular;
    }
    return colors.heavier;
  }
  // eslint-disable-next-line consistent-return
  return (
    <Wrapper
      background_color={() => getColor(max, length, selected)}
      onClick={() => setSelectedData(data)}
    >
      {length}
    </Wrapper>
  );
};
Cell.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string.isRequired,
    permalink: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    num_comments: PropTypes.number.isRequired,
    time: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired,
  })).isRequired,
  // setSelectedData: PropTypes.func.isRequired,
};

export default memo(Cell);
