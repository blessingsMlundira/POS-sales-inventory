import Grid from "@mui/material/Grid";

import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import InventoryIcon from "@mui/icons-material/Inventory";
import PeopleIcon from "@mui/icons-material/People";

import StatCard from "../common/StatCard";
import { dashboardData } from "../../data/dynamicsData";

const KPISection = () => {
 return (
   <Grid container spacing={3}>

     <Grid item xs={12} md={4}>
       <StatCard
         title="Sales Today"
         value={`$${dashboardData.salesToday}`}
         icon={<AttachMoneyIcon />}
       />
     </Grid>

     <Grid item xs={12} md={4}>
       <StatCard
         title="Customers"
         value={dashboardData.totalCustomers}
         icon={<PeopleIcon />}
       />
     </Grid>

     <Grid item xs={12} md={4}>
       <StatCard
         title="Inventory Items"
         value={dashboardData.inventoryItems}
         icon={<InventoryIcon />}
       />
     </Grid>

   </Grid>
 );
};

export default KPISection;