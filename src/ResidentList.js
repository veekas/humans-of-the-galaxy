import React from 'react';

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

export default ResidentList;
