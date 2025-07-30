import React from 'react';
import { Typography, Box } from '@mui/material';

const CreateActionPage: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Add New Eco Action
      </Typography>
      <Typography variant="body1" color="text.secondary">
        This page will contain a form to record new eco-friendly actions with photo upload capability.
      </Typography>
    </Box>
  );
};

export default CreateActionPage;