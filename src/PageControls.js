import React from 'react';

import styled from 'styled-components';

const ControlsContainer = styled.footer`
  width: 100%;
  bottom: 0px;
  position: fixed;
  background-color: #28333c;
  padding: 20px;
  display: flex;
  justify-content: space-around;
`;

const Control = styled.img`
  height: 2em;
  margin: 20px;
`;

const PageControls = ({ pageNumber }) => (
  <ControlsContainer>
    <Control src="back.svg" />
    <Control src="next.svg" />
  </ControlsContainer>
);

export default PageControls;
