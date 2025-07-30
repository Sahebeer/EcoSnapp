import React from 'react';
import { Typography, Box } from '@mui/material';

const DashboardPage: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Welcome to your eco-impact dashboard! This page will show your environmental statistics, recent actions, and progress charts.
      </Typography>
    </Box>
  );
};

export default DashboardPage;