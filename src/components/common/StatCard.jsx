import React from "react";
import { Card, CardContent, Typography, Box, Avatar } from "@mui/material";

const StatCard = ({ title, value, icon }) => {
  return (
    <Card>
      <CardContent>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box>
            <Typography variant="subtitle2" color="text.secondary">
              {title}
            </Typography>
            <Typography variant="h5">{value}</Typography>
          </Box>

          <Avatar sx={{ bgcolor: 'primary.main' }}>{icon}</Avatar>
        </Box>
      </CardContent>
    </Card>
  );
};

export default StatCard;