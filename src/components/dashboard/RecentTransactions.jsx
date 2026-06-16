import {
 Card,
 CardContent,
 Typography,
 Table,
 TableBody,
 TableCell,
 TableRow
} from "@mui/material";

import { dashboardData }
from "../../data/dynamicsData";

const RecentTransactions = () => {

 return (
   <Card>

     <CardContent>

       <Typography variant="h6">
         Recent POS Transactions
       </Typography>

       <Table>

         <TableBody>

           {dashboardData.transactions.map(tx => (

             <TableRow key={tx.id}>

               <TableCell>
                 {tx.id}
               </TableCell>

               <TableCell>
                 {tx.customer}
               </TableCell>

               <TableCell>
                 ${tx.amount}
               </TableCell>

             </TableRow>

           ))}

         </TableBody>

       </Table>

     </CardContent>

   </Card>
 );
};

export default RecentTransactions;