import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const InspectionList = ({ inspections }) => {
  return (
    <List>
      {inspections.map((inspection) => (
        <ListItem key={inspection.id}>
          <ListItemText
            primary={`Jet ID: ${inspection.jetId}`}
            secondary={`Inspector: ${inspection.inspector}, Date: ${inspection.date}`}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default InspectionList;
