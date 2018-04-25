import React from 'react';

import { Title, Control, ControlsContainer } from './styled/appElements';

const PageControls = ({ pageNumber, paginate }) => (
  <ControlsContainer>
    <Control src="back.svg" onClick={() => paginate('back')} />
    <Title> Page {pageNumber} of 7</Title>
    <Control src="next.svg" onClick={() => paginate('next')} />
  </ControlsContainer>
);

export default PageControls;
