import React from 'react';
import PropTypes from 'prop-types';

import { Title, Control, ControlsContainer } from './styled/appElements';

const PageControls = ({ pageNumber, paginate }) => (
  <ControlsContainer>
    <Control src="back.svg" onClick={() => paginate('back')} />
    <Title>Page {pageNumber} of 7</Title>
    <Control src="next.svg" onClick={() => paginate('next')} />
  </ControlsContainer>
);

PageControls.propTypes = {
  pageNumber: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
};

export default PageControls;
