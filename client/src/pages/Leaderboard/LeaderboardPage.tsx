import React from 'react';
import { Typography, Box } from '@mui/material';

const LeaderboardPage: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Leaderboard
      </Typography>
      <Typography variant="body1" color="text.secondary">
        This page will show global and regional leaderboards, featuring top eco-warriors and their impact statistics.
      </Typography>
    </Box>
  );
};

export default LeaderboardPage;