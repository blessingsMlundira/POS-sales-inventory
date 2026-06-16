export const dashboardData = {
  salesToday: 12450,
  totalCustomers: 1452,
  inventoryItems: 320,
  syncStatus: "Connected",

  salesTrend: [
    { month: "Jan", sales: 5000 },
    { month: "Feb", sales: 7000 },
    { month: "Mar", sales: 9000 },
    { month: "Apr", sales: 12000 },
    { month: "May", sales: 15000 },
    { month: "Jun", sales: 18000 }
  ],

  inventory: [
    { product: "Dell Laptop", stock: 25 },
    { product: "HP Printer", stock: 8 },
    { product: "Barcode Scanner", stock: 17 },
    { product: "Receipt Paper", stock: 120 }
  ],

  transactions: [
    {
      id: "INV001",
      customer: "John Banda",
      amount: 230
    },
    {
      id: "INV002",
      customer: "Mary Phiri",
      amount: 150
    }
  ]
};