import React from 'react';
import { Typography, Box } from '@mui/material';

const AdminDashboardPage: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>
      <Typography variant="body1" color="text.secondary">
        This page will provide administrative overview with user statistics, action verification, and system metrics.
      </Typography>
    </Box>
  );
};

export default AdminDashboardPage;