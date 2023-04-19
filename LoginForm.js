import React, { useState } from 'react';
import { Button, TextField, Grid, Typography } from '@mui/material';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Typography variant="h4">Login</Typography>
      </Grid>
      <form onSubmit={handleSubmit}>
        <Grid item>
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item>
          <TextField
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            fullWidth
          />
        </Grid>
        <Grid item>
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
        </Grid>
      </form>
    </Grid>
  );
};

export default LoginForm;
