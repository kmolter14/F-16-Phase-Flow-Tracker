import React, { useState } from 'react';
import { Button, TextField, Grid, Typography } from '@mui/material';

const InspectionForm = () => {
  const [jetId, setJetId] = useState('');
  const [inspector, setInspector] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle inspection submission logic here
  };

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Typography variant="h4">New Inspection</Typography>
      </Grid>
      <form onSubmit={handleSubmit}>
        <Grid item>
          <TextField
            label="Jet ID"
            value={jetId}
            onChange={(e) => setJetId(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item>
          <TextField
            label="Inspector"
            value={inspector}
            onChange={(e) => setInspector(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item>
          <Button type="submit" variant="contained" color="primary">
            Submit Inspection
          </Button>
        </Grid>
      </form>
    </Grid>
  );
};

export default InspectionForm;
