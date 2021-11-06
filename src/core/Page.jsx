/* eslint-disable linebreak-style */
import React from 'react';
import styled from '@emotion/styled';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Contents from './Contents';

const PageWrapper = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const Page = () => (
  <PageWrapper>
    <Header />
    <Contents />
    <Footer />
  </PageWrapper>
);

export default Page;
