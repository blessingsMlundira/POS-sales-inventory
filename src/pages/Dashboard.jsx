import React from "react";

import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent
} from "@mui/material";

import {
  BarChart,
  TrendingUp,
  ReceiptLong,
  LocalShipping
} from "@mui/icons-material";

import KPISection from "../components/dashboard/KPISection";
import SalesChart from "../components/dashboard/SalesChart";
import DynamicsSyncCard from "../components/dashboard/DynamicsSyncCard";
import RecentTransactions from "../components/dashboard/RecentTransactions";

/* -----------------------------
   Quick Info Tiles (Graphical Header)
------------------------------ */
const InfoTile = ({ icon, title, value, color }) => (
  <Card
    sx={{
      borderRadius: 3,
      background: `linear-gradient(135deg, ${color}22, #ffffff)`,
      boxShadow: "0px 3px 10px rgba(0,0,0,0.08)"
    }}
  >
    <CardContent>
      <Box display="flex" alignItems="center" gap={2}>
        <Box sx={{ color }}>{icon}</Box>

        <Box>
          <Typography fontSize={13} color="text.secondary">
            {title}
          </Typography>
          <Typography variant="h6" fontWeight="bold">
            {value}
          </Typography>
        </Box>
      </Box>
    </CardContent>
  </Card>
);

const Dashboard = () => {
  return (
    <Box>

      {/* ---------------- HEADER BANNER ---------------- */}
      <Box
        sx={{
          p: 3,
          mb: 3,
          borderRadius: 4,
          color: "white",
          background: "linear-gradient(135deg, #1976d2, #00c6ff)"
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          Dynamics POS Dashboard
        </Typography>

        <Typography sx={{ opacity: 0.9 }}>
          Real-time sales, inventory & financial insights
        </Typography>
      </Box>

      {/* ---------------- INFO TILES ---------------- */}
      <Grid container spacing={2} mb={4}>

        <Grid item xs={12} md={3}>
          <InfoTile
            icon={<BarChart fontSize="large" />}
            title="Total Revenue"
            value="$310,450"
            color="#1976d2"
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <InfoTile
            icon={<TrendingUp fontSize="large" />}
            title="Sales Growth"
            value="+18.5%"
            color="#4caf50"
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <InfoTile
            icon={<ReceiptLong fontSize="large" />}
            title="Transactions"
            value="1,284"
            color="#ff9800"
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <InfoTile
            icon={<LocalShipping fontSize="large" />}
            title="Pending Orders"
            value="37"
            color="#9c27b0"
          />
        </Grid>

      </Grid>

      {/* ---------------- KPI SECTION ---------------- */}
      <Box mb={3}>
        <Typography variant="h6" mb={1} fontWeight="bold">
          Key Performance Indicators
        </Typography>

        <KPISection />
      </Box>

      {/* ---------------- MAIN CONTENT ---------------- */}
      <Grid container spacing={3} rowSpacing={4} mt={4}>

        <Grid item xs={12} md={8}>
          <Card sx={{ borderRadius: 3 }}>
            <CardContent>
              <Typography variant="h6" mb={2} fontWeight="bold">
                Sales Analytics
              </Typography>

              <SalesChart />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <DynamicsSyncCard />
        </Grid>

        {/* ---------------- RECENT ACTIVITY ---------------- */}
        <Grid item xs={12}>
          <Card sx={{ borderRadius: 3 }}>
            <CardContent>
              <Typography variant="h6" mb={2} fontWeight="bold">
                Recent Transactions
              </Typography>

              <RecentTransactions />
            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </Box>
  );
};

export default Dashboard;