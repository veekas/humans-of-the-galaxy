import React from 'react';

import { ListItem } from './styled/listElements';

const ResidentList = ({ residents }) => (
  residents.length
    ? residents.map(resident => <ListItem key={resident.name}>{resident.name}</ListItem>)
    : <ListItem>This planet has no residents.</ListItem>
);

export default ResidentList;
