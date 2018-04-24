import React from 'react';

import { ListItem } from './styled/listElements';

const ResidentList = ({ residents }) => (
  residents.length
    ? residents.map(resident => <ListItem key={resident.name}>{resident.name}</ListItem>)
    : <ListItem>none</ListItem>
);

export default ResidentList;
