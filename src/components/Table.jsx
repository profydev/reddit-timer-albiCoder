/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 60vw;
`;
const Caption = styled.caption`
  text-align: left;
  font-size: 2rem;
  font-family: 'Bitter';
  font-weight: 500;
  margin-bottom: 1.5rem;
`;
const MyTable = styled.table`
  border: .1rem lightgrey solid;
  width: auto;
  border-collapse: collapse;
`;
const Tr = styled.tr`
  width: 100%;
  border: .1rem lightgrey solid;
  padding: .25rem;
`;
const Th = styled.th`
  text-align: left;
  border: .1rem lightgrey solid;
  height: 3rem;
  font-size: 1.4rem;
  padding: 1rem;
  max-width: min(40rem, 30vw);
  min-width: min(12rem, 5vw);
`;
const Td = styled.td`
  border: .1rem lightgrey solid;
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis;
  max-width: min(40rem, 30vw);
  min-width: min(12rem, 5vw);
  height: 3rem;
  font-size: 1.4rem;
  padding: 1rem;
`;

const Table = ({ data }) => (
  <Wrapper>
    <MyTable border="1" style={{ border: 1 }}>
      <Caption>
        Posts
      </Caption>
      <thead>
        <Tr>
          <Th>Title</Th>
          <Th>Time Posted</Th>
          <Th>Score</Th>
          <Th>Comments</Th>
          <Th>Author</Th>
        </Tr>
      </thead>
      <tbody>
        {
          data.map((item) => (
            <Tr key={item.id}>
              <Td><a href={`http://reddit.com${item.permalink}`}>{item.title}</a></Td>
              <Td>{item.time}</Td>
              <Td>{item.score}</Td>
              <Td>{item.num_comments}</Td>
              <Td><a href={`http://reddit.com/user/${item.author}`}>{item.author}</a></Td>
            </Tr>
          ))
        }
      </tbody>
    </MyTable>
  </Wrapper>
);

export default Table;
