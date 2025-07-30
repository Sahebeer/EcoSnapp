import React from 'react';
import { Typography, Box } from '@mui/material';

const ActionsPage: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        My Eco Actions
      </Typography>
      <Typography variant="body1" color="text.secondary">
        This page will display all your recorded eco-friendly actions, with filtering and sorting options.
      </Typography>
    </Box>
  );
};

export default ActionsPage;