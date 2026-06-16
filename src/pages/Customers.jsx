import React from "react";

import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  Button
} from "@mui/material";

import {
  People,
  PersonAdd,
  Star,
  TrendingUp,
  EmojiPeople
} from "@mui/icons-material";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis
} from "recharts";

/* -----------------------------
   Dummy CRM Data
------------------------------ */
const customerSummary = {
  total: 1452,
  active: 980,
  newThisMonth: 120,
  highValue: 210
};

const segmentData = [
  { name: "Regular", value: 700 },
  { name: "VIP", value: 210 },
  { name: "New", value: 120 },
  { name: "Inactive", value: 422 }
];

const spendingData = [
  { segment: "VIP", amount: 45000 },
  { segment: "Regular", amount: 22000 },
  { segment: "New", amount: 8000 },
  { segment: "Inactive", amount: 2000 }
];

const customers = [
  { id: "CUST-001", name: "John Banda", email: "john@example.com", purchases: 12, spent: 1200, status: "VIP" },
  { id: "CUST-002", name: "Mary Phiri", email: "mary@example.com", purchases: 5, spent: 450, status: "Regular" },
  { id: "CUST-003", name: "Peter Chirwa", email: "peter@example.com", purchases: 1, spent: 80, status: "New" },
  { id: "CUST-004", name: "Agnes Mwale", email: "agnes@example.com", purchases: 18, spent: 3200, status: "VIP" }
];

/* -----------------------------
   Graphical KPI Card
------------------------------ */
const InfoCard = ({ icon, title, value, color }) => (
  <Card
    sx={{
      borderRadius: 3,
      background: `linear-gradient(135deg, ${color}22, #ffffff)`,
      boxShadow: "0px 3px 12px rgba(0,0,0,0.08)"
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

/* -----------------------------
   Customers Page (Enhanced UI)
------------------------------ */
const Customers = () => {
  return (
    <Box>

      {/* ================= HERO HEADER ================= */}
      <Box
        sx={{
          p: 3,
          mb: 3,
          borderRadius: 4,
          color: "white",
          background: "linear-gradient(135deg, #4a148c, #7b1fa2, #ab47bc)"
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          Customer Intelligence Center
        </Typography>

        <Typography sx={{ opacity: 0.9 }}>
          Microsoft Dynamics CRM – Customer Analytics & Engagement
        </Typography>
      </Box>

      {/* ================= KPI CARDS ================= */}
      <Grid container spacing={2} mb={3}>

        <Grid item xs={12} md={3}>
          <InfoCard
            icon={<People fontSize="large" />}
            title="Total Customers"
            value={customerSummary.total}
            color="#1976d2"
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <InfoCard
            icon={<TrendingUp fontSize="large" />}
            title="Active Customers"
            value={customerSummary.active}
            color="#4caf50"
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <InfoCard
            icon={<PersonAdd fontSize="large" />}
            title="New This Month"
            value={customerSummary.newThisMonth}
            color="#ff9800"
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <InfoCard
            icon={<Star fontSize="large" />}
            title="VIP Customers"
            value={customerSummary.highValue}
            color="#9c27b0"
          />
        </Grid>

      </Grid>

      {/* ================= SECTION TITLE ================= */}
      <Box mb={2}>
        <Typography variant="h6" fontWeight="bold">
          Customer Analytics
        </Typography>
      </Box>

      {/* ================= CHARTS ================= */}
      <Grid container spacing={2} mb={3}>

        {/* SEGMENTATION PIE */}
        <Grid item xs={12} md={6}>
          <Card sx={{ borderRadius: 3 }}>
            <CardContent>
              <Typography fontWeight="bold" mb={2}>
                Customer Segmentation
              </Typography>

              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={segmentData}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={100}
                    label
                  >
                    <Cell fill="#1976d2" />
                    <Cell fill="#ff9800" />
                    <Cell fill="#4caf50" />
                    <Cell fill="#9e9e9e" />
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>

            </CardContent>
          </Card>
        </Grid>

        {/* SPENDING BAR */}
        <Grid item xs={12} md={6}>
          <Card sx={{ borderRadius: 3 }}>
            <CardContent>
              <Typography fontWeight="bold" mb={2}>
                Spending by Segment
              </Typography>

              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={spendingData}>
                  <XAxis dataKey="segment" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="amount" fill="#4caf50" />
                </BarChart>
              </ResponsiveContainer>

            </CardContent>
          </Card>
        </Grid>

      </Grid>

      {/* ================= CUSTOMER TABLE ================= */}
      <Card sx={{ borderRadius: 3 }}>
        <CardContent>

          <Typography variant="h6" fontWeight="bold" mb={2}>
            Customer Directory
          </Typography>

          <Table>

            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Purchases</TableCell>
                <TableCell>Total Spent</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {customers.map((c) => (
                <TableRow key={c.id}>

                  <TableCell>{c.id}</TableCell>
                  <TableCell>{c.name}</TableCell>
                  <TableCell>{c.email}</TableCell>
                  <TableCell>{c.purchases}</TableCell>
                  <TableCell>${c.spent}</TableCell>

                  <TableCell>
                    <Chip
                      label={c.status}
                      size="small"
                      color={
                        c.status === "VIP"
                          ? "warning"
                          : c.status === "Regular"
                          ? "primary"
                          : "success"
                      }
                    />
                  </TableCell>

                </TableRow>
              ))}
            </TableBody>

          </Table>

        </CardContent>
      </Card>

    </Box>
  );
};

export default Customers;