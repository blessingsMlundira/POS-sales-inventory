import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout";

// Pages
import Dashboard from "./pages/Dashboard";
import Sales from "./pages/Sales";
import Inventory from "./pages/Inventory";
import Customers from "./pages/Customers";
import Payroll from "./pages/Payroll";


function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>

          {/* Dashboard */}
          <Route path="/" element={<Dashboard />} />

          {/* Sales Module */}
          <Route path="/sales" element={<Sales />} />

          {/* Inventory Module */}
          <Route path="/inventory" element={<Inventory />} />

          {/* CRM / Customers */}
          <Route path="/customers" element={<Customers />} />

          {/* HR / Payroll */}
          <Route path="/payroll" element={<Payroll />} />

          

        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;