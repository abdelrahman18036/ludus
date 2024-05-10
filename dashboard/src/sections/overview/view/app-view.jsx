import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2'; // Note: Consider using a stable version if available
import Typography from '@mui/material/Typography';
import { Helmet } from 'react-helmet-async';

export default function AppView() {
  return (
    <Container maxWidth="xl" sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Helmet>
        <title>Hi, Welcome Back 👋</title>
      </Helmet>
      <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ textAlign: 'center' }}>
        <Grid xs={12}>
          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold' }}>
            Hi, Welcome back 👋
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
