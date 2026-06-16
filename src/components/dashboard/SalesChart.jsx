import {
 Card,
 CardContent,
 Typography
} from "@mui/material";

import {
 ResponsiveContainer,
 AreaChart,
 Area,
 XAxis,
 YAxis,
 Tooltip
} from "recharts";

import { dashboardData }
from "../../data/dynamicsData";

const SalesChart = () => {

 return (
   <Card>
     <CardContent>

       <Typography
         variant="h6"
         gutterBottom
       >
         Sales from Dynamics 365
       </Typography>

       <ResponsiveContainer
         width="100%"
         height={300}
       >
         <AreaChart
           data={dashboardData.salesTrend}
         >
           <XAxis dataKey="month" />
           <YAxis />
           <Tooltip />
           <Area
             type="monotone"
             dataKey="sales"
           />
         </AreaChart>
       </ResponsiveContainer>

     </CardContent>
   </Card>
 );
};

export default SalesChart;