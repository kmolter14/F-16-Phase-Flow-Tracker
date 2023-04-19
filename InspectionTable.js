import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from '@mui/material';

const InspectionTable = ({ inspections }) => {
  return (
    <>
      <Typography variant="h4">Inspections</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Jet ID</TableCell>
              <TableCell>Inspector</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {inspections.map((inspection) => (
              <TableRow key={inspection.id}>
                <TableCell>{inspection.jetId}</TableCell>
                <TableCell>{inspection.inspector}</TableCell>
                <TableCell>{inspection.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default InspectionTable;
