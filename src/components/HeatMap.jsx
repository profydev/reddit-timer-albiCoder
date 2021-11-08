/* eslint-disable linebreak-style */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable react/prop-types */
/* eslint-disable quote-props */
import React, { memo, useState } from 'react';
import styled from '@emotion/styled';
// import PropTypes from 'prop-types';

import Row from './Row';
import DaysColumn from './DaysColumn';
import HoursRow from './HoursRow';

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

const HeatMap = ({ searchData, selectedData, setSelectedData }) => {
  function getSelectedCellDayTime(selectedPosts) {
    if (!selectedPosts) return null;
    return { 'day': selectedPosts[0].day, 'time': selectedPosts[0].time };
  }
  function getMaxNumPostsForDayTime(subredditResult) {
    let max = 0;
    for (const day in subredditResult) {
      for (const hour in subredditResult[day]) {
        if (max < subredditResult[day][hour].length) {
          max = subredditResult[day][hour].length;
        }
      }
    }
    return max;
  }

  const [selectedCell, setSelectedCell] = useState(getSelectedCellDayTime(selectedData));
  const [maxNumberOfPosts] = useState(getMaxNumPostsForDayTime(searchData));
  return (
    <Wrapper>
      <DaysColumn />
      <div>
        <HoursRow />
        <div>
          <Row
            data={searchData.Sunday}
            setSelectedData={setSelectedData}
            selectedCell={selectedCell}
            setSelectedCell={setSelectedCell}
            maxNumberOfPosts={maxNumberOfPosts}
          />
          <Row
            data={searchData.Monday}
            setSelectedData={setSelectedData}
            selectedCell={selectedCell}
            setSelectedCell={setSelectedCell}
            maxNumberOfPosts={maxNumberOfPosts}
          />
          <Row
            data={searchData.Tuesday}
            setSelectedData={setSelectedData}
            selectedCell={selectedCell}
            setSelectedCell={setSelectedCell}
            maxNumberOfPosts={maxNumberOfPosts}
          />
          <Row
            data={searchData.Wednesday}
            setSelectedData={setSelectedData}
            selectedCell={selectedCell}
            setSelectedCell={setSelectedCell}
            maxNumberOfPosts={maxNumberOfPosts}
          />
          <Row
            data={searchData.Thursday}
            setSelectedData={setSelectedData}
            selectedCell={selectedCell}
            setSelectedCell={setSelectedCell}
            maxNumberOfPosts={maxNumberOfPosts}
          />
          <Row
            data={searchData.Friday}
            setSelectedData={setSelectedData}
            selectedCell={selectedCell}
            setSelectedCell={setSelectedCell}
            maxNumberOfPosts={maxNumberOfPosts}
          />
          <Row
            data={searchData.Saturday}
            setSelectedData={setSelectedData}
            selectedCell={selectedCell}
            setSelectedCell={setSelectedCell}
            maxNumberOfPosts={maxNumberOfPosts}
          />
        </div>
      </div>
    </Wrapper>
  );
};
// HeatMap.propTypes = {
//   data: PropTypes.arrayOf(PropTypes.shape({
//     author: PropTypes.string.isRequired,
//     permalink: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     score: PropTypes.number.isRequired,
//     num_comments: PropTypes.number.isRequired,
//     time: PropTypes.string.isRequired,
//     day: PropTypes.string.isRequired,
//   })).isRequired,
// };

export default memo(HeatMap);
