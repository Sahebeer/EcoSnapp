import React from 'react';
import { Typography, Box } from '@mui/material';

const ProfilePage: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Profile Settings
      </Typography>
      <Typography variant="body1" color="text.secondary">
        This page will allow users to manage their profile information, achievements, and account settings.
      </Typography>
    </Box>
  );
};

export default ProfilePage;