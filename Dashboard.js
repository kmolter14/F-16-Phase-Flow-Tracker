import React from 'react';
import { Container, Grid } from '@mui/material';
import InspectionForm from './InspectionForm';
import InspectionTable from './InspectionTable';

const Dashboard = () => {
  // Dummy data for inspection table, replace with actual data
  const inspections = [
    { id: 1, jetId: 'FJ-123', inspector: 'John Doe', date: '2023-04-14' },
    { id: 2, jetId: 'FJ-234', inspector: 'Jane Smith', date: '2023-04-13' },
  ];

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <InspectionForm />
        </Grid>
        <Grid item xs={12} md={6}>
          <InspectionTable inspections={inspections} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
