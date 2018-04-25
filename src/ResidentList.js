import React from 'react';
import PropTypes from 'prop-types';

import { ListItem } from './styled/listElements';

const ResidentList = ({ residents }) => (
  // render useful message if no residents live on requested planet
  residents.length
    ?
    residents.map(resident => (
      <ListItem key={resident.name}>
        {resident.name}
      </ListItem>
    ))
    : <ListItem>No one lives here.</ListItem>
);

ResidentList.propTypes = {
  residents: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ResidentList;
