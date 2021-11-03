/* eslint-disable linebreak-style */
import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  width: 20vw;
  height: 20vw;
`;
const Center = styled.div`
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  background-color: white;
  border: 1rem solid #fdb755;
  position: relative;
  top: 25%;
  left: 25%;
  transform: translate(-50%, -50%);
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  z-index: 3;
  ::after {
    content: "";
    width: 8rem;
    background-color: white;
    z-index: 40;
    position: absolute;
    transform: translate(-25%, -25%) rotate(-1deg);
    height: 8rem;
  }
`;

const LoadingBox = () => (
  <Wrapper>
    <Center />
  </Wrapper>
);

export default LoadingBox;
