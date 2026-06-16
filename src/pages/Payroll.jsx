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
  Button,
  Avatar
} from "@mui/material";

import {
  Payments,
  People,
  AccountBalanceWallet,
  ReceiptLong,
  PlayCircle,
  TrendingUp,
  Savings
} from "@mui/icons-material";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell
} from "recharts";

/* -----------------------------
   Dummy Payroll Data
------------------------------ */
const payrollSummary = {
  totalEmployees: 58,
  totalSalary: 125000,
  totalDeductions: 18000,
  netPayroll: 107000
};

const departmentPayroll = [
  { department: "Sales", amount: 40000 },
  { department: "IT", amount: 30000 },
  { department: "HR", amount: 15000 },
  { department: "Finance", amount: 20000 },
  { department: "Operations", amount: 20000 }
];

const salaryBreakdown = [
  { name: "Basic Salary", value: 70000 },
  { name: "Allowances", value: 30000 },
  { name: "Bonuses", value: 15000 },
  { name: "Overtime", value: 10000 }
];

const employees = [
  {
    id: "EMP-001",
    name: "John Banda",
    department: "Sales",
    salary: 2500,
    status: "Paid"
  },
  {
    id: "EMP-002",
    name: "Mary Phiri",
    department: "IT",
    salary: 3200,
    status: "Pending"
  },
  {
    id: "EMP-003",
    name: "Peter Chirwa",
    department: "HR",
    salary: 2100,
    status: "Processing"
  },
  {
    id: "EMP-004",
    name: "Agnes Mwale",
    department: "Finance",
    salary: 4100,
    status: "Paid"
  }
];

/* -----------------------------
   Graphical KPI Card
------------------------------ */
const InfoCard = ({ title, value, icon, color }) => (
  <Card
    sx={{
      borderRadius: 3,
      background: `linear-gradient(135deg, ${color}22, #ffffff)`,
      boxShadow: "0px 3px 12px rgba(0,0,0,0.08)"
    }}
  >
    <CardContent>
      <Box display="flex" alignItems="center" gap={2}>
        <Box sx={{ color }}>
          {icon}
        </Box>

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
   Payroll Page
------------------------------ */
const Payroll = () => {
  return (
    <Box>

      {/* ================= HERO HEADER ================= */}
      <Box
        sx={{
          p: 3,
          mb: 3,
          borderRadius: 4,
          color: "white",
          background:
            "linear-gradient(135deg, #283593, #5e35b1, #8e24aa)"
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          Payroll Command Center
        </Typography>

        <Typography sx={{ opacity: 0.9 }}>
          Microsoft Dynamics HR & Payroll Operations Dashboard
        </Typography>
      </Box>

      {/* ================= KPI CARDS ================= */}
      <Grid container spacing={2} mb={3}>

        <Grid item xs={12} md={3}>
          <InfoCard
            title="Employees"
            value={payrollSummary.totalEmployees}
            color="#1976d2"
            icon={<People fontSize="large" />}
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <InfoCard
            title="Total Salary"
            value={`$${payrollSummary.totalSalary.toLocaleString()}`}
            color="#4caf50"
            icon={<Payments fontSize="large" />}
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <InfoCard
            title="Deductions"
            value={`$${payrollSummary.totalDeductions.toLocaleString()}`}
            color="#ff9800"
            icon={<ReceiptLong fontSize="large" />}
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <InfoCard
            title="Net Payroll"
            value={`$${payrollSummary.netPayroll.toLocaleString()}`}
            color="#9c27b0"
            icon={<AccountBalanceWallet fontSize="large" />}
          />
        </Grid>

      </Grid>

      {/* ================= ACTION BAR ================= */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h6" fontWeight="bold">
          Payroll Analytics
        </Typography>

        <Button
          variant="contained"
          startIcon={<PlayCircle />}
        >
          Run Payroll
        </Button>
      </Box>

      {/* ================= CHARTS ================= */}
      <Grid container spacing={2} mb={3}>

        {/* PAYROLL BY DEPARTMENT */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              borderRadius: 3,
              height: "100%"
            }}
          >
            <CardContent>

              <Box
                display="flex"
                alignItems="center"
                gap={1}
                mb={2}
              >
                <TrendingUp color="primary" />
                <Typography fontWeight="bold">
                  Payroll by Department
                </Typography>
              </Box>

              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={departmentPayroll}>
                  <XAxis dataKey="department" />
                  <YAxis />
                  <Tooltip />
                  <Bar
                    dataKey="amount"
                    fill="#5e35b1"
                    radius={[6, 6, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>

            </CardContent>
          </Card>
        </Grid>

        {/* SALARY BREAKDOWN */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              borderRadius: 3,
              height: "100%"
            }}
          >
            <CardContent>

              <Box
                display="flex"
                alignItems="center"
                gap={1}
                mb={2}
              >
                <Savings color="success" />
                <Typography fontWeight="bold">
                  Salary Composition
                </Typography>
              </Box>

              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={salaryBreakdown}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={100}
                    label
                  >
                    <Cell fill="#4caf50" />
                    <Cell fill="#2196f3" />
                    <Cell fill="#ff9800" />
                    <Cell fill="#9c27b0" />
                  </Pie>

                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>

            </CardContent>
          </Card>
        </Grid>

      </Grid>

      {/* ================= PAYROLL TABLE ================= */}
      <Card sx={{ borderRadius: 3 }}>
        <CardContent>

          <Typography
            variant="h6"
            fontWeight="bold"
            mb={2}
          >
            Payroll Processing Queue
          </Typography>

          <Table>

            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Employee</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>Salary</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {employees.map((emp) => (
                <TableRow key={emp.id}>

                  <TableCell>{emp.id}</TableCell>

                  <TableCell>
                    <Box
                      display="flex"
                      alignItems="center"
                      gap={1}
                    >
                      <Avatar
                        sx={{
                          width: 32,
                          height: 32,
                          bgcolor: "#5e35b1"
                        }}
                      >
                        {emp.name.charAt(0)}
                      </Avatar>

                      {emp.name}
                    </Box>
                  </TableCell>

                  <TableCell>{emp.department}</TableCell>

                  <TableCell>
                    ${emp.salary.toLocaleString()}
                  </TableCell>

                  <TableCell>
                    <Chip
                      label={emp.status}
                      size="small"
                      color={
                        emp.status === "Paid"
                          ? "success"
                          : emp.status === "Pending"
                          ? "warning"
                          : "info"
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

export default Payroll;