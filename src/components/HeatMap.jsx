/* eslint-disable react/prop-types */
/* eslint-disable quote-props */
/* eslint-disable linebreak-style */
import React, { memo } from 'react';
import styled from '@emotion/styled';
// import PropTypes from 'prop-types';

import Row from './Row';
import DaysColumn from './DaysColumn';
import HoursRow from './HoursRow';

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

const CellsSection = styled.div`
`;

const HeatMap = ({ searchData, setSelectedData }) => (
  <Wrapper>
    <DaysColumn />
    <div>
      <HoursRow />
      <CellsSection>
        <Row data={searchData?.Sunday} setSelectedData={setSelectedData} />
        <Row data={searchData?.Monday} setSelectedData={setSelectedData} />
        <Row data={searchData?.Tuesday} setSelectedData={setSelectedData} />
        <Row data={searchData?.Wednesday} setSelectedData={setSelectedData} />
        <Row data={searchData?.Thursday} setSelectedData={setSelectedData} />
        <Row data={searchData?.Friday} setSelectedData={setSelectedData} />
        <Row data={searchData?.Saturday} setSelectedData={setSelectedData} />
      </CellsSection>
    </div>
  </Wrapper>
);
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
