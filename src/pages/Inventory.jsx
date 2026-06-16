import React, { useEffect, useState } from "react";
import api from "../services/api";

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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Stack
} from "@mui/material";

import {
  Inventory2,
  WarningAmber,
  CheckCircle,
  Store,
  AddBox
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
   Inventory Page
------------------------------ */
const Inventory = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editOpen, setEditOpen] = useState(false);
  const [addOpen, setAddOpen] = useState(false);

const [editingProduct, setEditingProduct] = useState({
  id: "",
  name: "",
  category: "",
  price: "",
  stock: ""
});

const [newProduct, setNewProduct] = useState({
  name: "",
  category: "",
  price: "",
  stock: ""
});

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const response = await api.get("/products");

      const mappedProducts = response.data.map((product) => ({
        ...product,
        sku: `PRD-${product.id.toString().padStart(3, "0")}`,
        status:
          product.stock === 0
            ? "Out of Stock"
            : product.stock <= 10
            ? "Low Stock"
            : "In Stock"
      }));

      setProducts(mappedProducts);
    } catch (error) {
      console.error("Failed to load inventory:", error);
    } finally {
      setLoading(false);
    }
  };

  const createProduct = async () => {
    try {
      await api.post("/products", {
        name: newProduct.name,
        category: newProduct.category,
        price: Number(newProduct.price),
        stock: Number(newProduct.stock)
      });

      setAddOpen(false);
      setNewProduct({
        name: "",
        category: "",
        price: "",
        stock: ""
      });
      loadProducts();
    } catch (error) {
      console.error("Failed to create product:", error);
    }
  };

  const openAddDialog = () => {
    setNewProduct({
      name: "",
      category: "",
      price: "",
      stock: ""
    });
    setAddOpen(true);
  };

  const handleAddChange = (field) => (event) => {
    setNewProduct((prev) => ({
      ...prev,
      [field]: event.target.value
    }));
  };

  const openEditDialog = (product) => {
  setEditingProduct({
    id: product.id,
    name: product.name,
    category: product.category || "",
    price: product.price,
    stock: product.stock
  });

  setEditOpen(true);
};

const handleEditChange = (field) => (event) => {
  setEditingProduct((prev) => ({
    ...prev,
    [field]: event.target.value
  }));
};

const updateProduct = async () => {
  try {
    await api.put(`/products/${editingProduct.id}`, {
      name: editingProduct.name,
      category: editingProduct.category,
      price: Number(editingProduct.price),
      stock: Number(editingProduct.stock)
    });

    setEditOpen(false);
    loadProducts();
  } catch (error) {
    console.error("Failed to update product:", error);
  }
};



  const inventorySummary = {
    totalProducts: products.length,

    inStock: products.filter((p) => p.stock > 10).length,

    lowStock: products.filter(
      (p) => p.stock > 0 && p.stock <= 10
    ).length,

    outOfStock: products.filter(
      (p) => p.stock === 0
    ).length
  };

  const stockDistribution = [
    {
      name: "In Stock",
      value: inventorySummary.inStock
    },
    {
      name: "Low Stock",
      value: inventorySummary.lowStock
    },
    {
      name: "Out of Stock",
      value: inventorySummary.outOfStock
    }
  ];

  const categoryStock = Object.values(
    products.reduce((acc, product) => {
      const category = product.category || "Uncategorized";

      if (!acc[category]) {
        acc[category] = {
          category,
          stock: 0
        };
      }

      acc[category].stock += product.stock;

      return acc;
    }, {})
  );

  if (loading) {
    return (
      <Box p={3}>
        <Typography>Loading Inventory...</Typography>
      </Box>
    );
  }

  return (
    <Box>

      {/* HERO HEADER */}
      <Box
        sx={{
          p: 3,
          mb: 3,
          borderRadius: 4,
          color: "white",
          background:
            "linear-gradient(135deg, #1b5e20, #43a047, #00c853)"
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          Inventory Control Center
        </Typography>

        <Typography sx={{ opacity: 0.9 }}>
          Microsoft Dynamics POS – Real-time Stock Management System
        </Typography>
      </Box>

      {/* KPI CARDS */}
      <Grid container spacing={2} mb={3}>
        <Grid item xs={12} md={3}>
          <InfoCard
            icon={<Inventory2 fontSize="large" />}
            title="Total Products"
            value={inventorySummary.totalProducts}
            color="#1976d2"
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <InfoCard
            icon={<CheckCircle fontSize="large" />}
            title="In Stock"
            value={inventorySummary.inStock}
            color="#4caf50"
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <InfoCard
            icon={<WarningAmber fontSize="large" />}
            title="Low Stock"
            value={inventorySummary.lowStock}
            color="#ff9800"
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <InfoCard
            icon={<Store fontSize="large" />}
            title="Out Of Stock"
            value={inventorySummary.outOfStock}
            color="#f44336"
          />
        </Grid>
      </Grid>

      {/* SECTION HEADER */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h6" fontWeight="bold">
          Inventory Analytics
        </Typography>

        <Button
          variant="contained"
          startIcon={<AddBox />}
          onClick={openAddDialog}
        >
          Add Product
        </Button>
      </Box>

      {/* CHARTS */}
      <Grid container spacing={2} mb={3}>
        <Grid item xs={12} md={6}>
          <Card sx={{ borderRadius: 3 }}>
            <CardContent>
              <Typography fontWeight="bold" mb={2}>
                Stock Distribution
              </Typography>

              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={stockDistribution}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={100}
                    label
                  >
                    <Cell fill="#4caf50" />
                    <Cell fill="#ff9800" />
                    <Cell fill="#f44336" />
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ borderRadius: 3 }}>
            <CardContent>
              <Typography fontWeight="bold" mb={2}>
                Stock By Category
              </Typography>

              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={categoryStock}>
                  <XAxis dataKey="category" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="stock" fill="#1976d2" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* PRODUCT TABLE */}
      <Card sx={{ borderRadius: 3 }}>
        <CardContent>

          <Typography variant="h6" fontWeight="bold" mb={2}>
            Product Inventory List
          </Typography>

          <Table>
            <TableHead>
              <TableRow>
                <TableCell>SKU</TableCell>
                <TableCell>Product</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Stock</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {products.map((item) => (
                <TableRow key={item.sku}>
                  <TableCell>{item.sku}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>${item.price}</TableCell>
                  <TableCell>{item.stock}</TableCell>

                  <TableCell>
                    <Chip
                      label={item.status}
                      size="small"
                      color={
                        item.status === "In Stock"
                          ? "success"
                          : item.status === "Low Stock"
                          ? "warning"
                          : "error"
                      }
                    />
                  </TableCell>

                  <TableCell>
                   <Button
                      size="small"
                      variant="outlined"
                      onClick={() => openEditDialog(item)}
                    >
                      Update
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>

          </Table>

        </CardContent>
      </Card>

      <Dialog
  open={editOpen}
  onClose={() => setEditOpen(false)}
  fullWidth
  maxWidth="sm"
>
  <DialogTitle>
    Update Product
  </DialogTitle>

  <DialogContent>
    <Stack spacing={2} sx={{ mt: 2 }}>

      <TextField
        label="Product Name"
        value={editingProduct.name}
        onChange={handleEditChange("name")}
        fullWidth
      />

      <TextField
        label="Category"
        value={editingProduct.category}
        onChange={handleEditChange("category")}
        fullWidth
      />

      <TextField
        label="Price"
        type="number"
        value={editingProduct.price}
        onChange={handleEditChange("price")}
        fullWidth
      />

      <TextField
        label="Stock"
        type="number"
        value={editingProduct.stock}
        onChange={handleEditChange("stock")}
        fullWidth
      />

    </Stack>
  </DialogContent>

  <DialogActions>
    <Button onClick={() => setEditOpen(false)}>
      Cancel
    </Button>

    <Button
      variant="contained"
      onClick={updateProduct}
    >
      Save Changes
    </Button>
  </DialogActions>
</Dialog>

      <Dialog
  open={addOpen}
  onClose={() => setAddOpen(false)}
  fullWidth
  maxWidth="sm"
>
  <DialogTitle>
    Add New Product
  </DialogTitle>

  <DialogContent>
    <Stack spacing={2} sx={{ mt: 2 }}>

      <TextField
        label="Product Name"
        value={newProduct.name}
        onChange={handleAddChange("name")}
        fullWidth
        placeholder="Enter product name"
      />

      <TextField
        label="Category"
        value={newProduct.category}
        onChange={handleAddChange("category")}
        fullWidth
        placeholder="Enter category"
      />

      <TextField
        label="Price"
        type="number"
        value={newProduct.price}
        onChange={handleAddChange("price")}
        fullWidth
        placeholder="Enter price"
      />

      <TextField
        label="Stock"
        type="number"
        value={newProduct.stock}
        onChange={handleAddChange("stock")}
        fullWidth
        placeholder="Enter stock quantity"
      />

    </Stack>
  </DialogContent>

  <DialogActions>
    <Button onClick={() => setAddOpen(false)}>
      Cancel
    </Button>

    <Button
      variant="contained"
      onClick={createProduct}
    >
      Add Product
    </Button>
  </DialogActions>
</Dialog>

    </Box>
  );
};

export default Inventory;