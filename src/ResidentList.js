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
  // eslint-disable-next-line react/forbid-prop-types
  residents: PropTypes.array.isRequired,
};

export default ResidentList;
