/* eslint-disable linebreak-style */
import styled from '@emotion/styled';

// display content for screen reader only (assistive technology)
const SROnly = styled.span`
  position: absolute; 
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px; 
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap; /* added line */
  border: 0;
`;

export default SROnly;
