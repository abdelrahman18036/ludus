// importing the modules
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// importing the database connection and the environment variables
require("dotenv").config();
require("./config/db");

// define the routes
const userRoutes = require("./routes/user.routes");
const productRoutes = require("./routes/product.routes");
const orderRoutes = require("./routes/order.routes");
const categoryRoutes = require("./routes/category.routes");
const profileRoutes = require("./routes/profile.routes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/api/users", userRoutes);
app.use("/api/nfts", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/profile", profileRoutes);

// Error handling 404 NOT FOUND
app.use((req, res, next) => {
  res.status(404).send("Resource not found");
});

// Error handling 500 INTERNAL SERVER ERROR
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
