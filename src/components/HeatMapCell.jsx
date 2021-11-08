/* eslint-disable linebreak-style */
import React, { memo } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  width: min(4rem, 2.5vw);
  height: min(4rem, 2.5vw);
  text-align: center;
  vertical-align: middle;
  line-height: min(4rem, 2.5vw);
  font-size: clamp(.1rem, .1rem + 1vw, 1.4rem);
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  background-color: ${(props) => props.background_color};
  border: .2rem solid ${(props) => props.background_color};
  &:hover {
    border: .2rem solid black;
  }
  @media (max-width: 45em) {
    width: 3.5vw;
    height: 3.5vw;
    line-height: 3.5vw;
  }
`;
// all colors that heatmap cells can have
const colors = {
  yellow_green: '#E0E5A3',
  very_light: '#A9D194',
  light: '#A0CE93',
  medium_light: '#96CB94',
  medium: '#8CC894',
  regular: '#5EB391',
  heavier: '#5AAD8C',
  selected: '#3984A3',
};

const HeatMapCell = ({
  postsInADayHour, setSelectedData, selectedCell, setSelectedCell, maxNumberOfPosts,
}) => {
  // we are going to display as selected only non-zero cells
  function getThisCellDayTime(posts) { // this does not get day time of zero element arrays
    // consider going back to 3D array
    if (posts.length === 0) return null;
    return { day: posts[0].day, time: posts[0].time };
  }
  function isCellSelected(posts) {
    if (!selectedCell) return false;
    const thisCell = getThisCellDayTime(posts);
    if (thisCell && thisCell.day === selectedCell.day && thisCell.time === selectedCell.time) {
      return true;
    }
    return false;
  }
  // get number of posts
  const { length } = postsInADayHour;
  const selected = isCellSelected(postsInADayHour);

  // get background color for the corresponding posts number
  function getColorForCellValue(maxValue, cellValue, isSelected) {
    // the number of values that should be displayed with the same color
    const step = Math.ceil(maxValue / 6);
    if (isSelected) {
      return colors.selected;
    } if (cellValue === 0) {
      return colors.yellow_green;
    } if (cellValue <= step) {
      return colors.very_light;
    } if (cellValue <= step * 2) {
      return colors.light;
    } if (cellValue <= step * 3) {
      return colors.medium_light;
    } if (cellValue <= step * 4) {
      return colors.medium;
    } if (cellValue <= step * 5) {
      return colors.regular;
    }
    return colors.heavier;
  }

  function handleClick() {
    setSelectedData(postsInADayHour.length !== 0 ? postsInADayHour : null);
    setSelectedCell(getThisCellDayTime(postsInADayHour));
  }

  // eslint-disable-next-line consistent-return
  return (
    <Wrapper
      background_color={() => getColorForCellValue(maxNumberOfPosts, length, selected)}
      onClick={handleClick}
    >
      {length}
    </Wrapper>
  );
};
HeatMapCell.defaultProps = {
  selectedCell: null,
};
HeatMapCell.propTypes = {
  postsInADayHour: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    permalink: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    num_comments: PropTypes.number.isRequired,
    time: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired,
  })).isRequired,
  setSelectedData: PropTypes.func.isRequired,
  selectedCell: PropTypes.shape({
    day: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  }),
  setSelectedCell: PropTypes.func.isRequired,
  maxNumberOfPosts: PropTypes.number.isRequired,
};

export default memo(HeatMapCell);
