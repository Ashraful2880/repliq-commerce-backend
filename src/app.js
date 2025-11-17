const express = require("express");
const cors = require("cors");
require("dotenv").config();

// MongoDB Connection
const { connectDB } = require("./config/database");

// Initialize database connection
connectDB().catch(console.error);

const app = express();

// middleWare
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
const productRoute = require("./routes/productRoutes");
app.use("/products", productRoute);

const productCategoryRoutes = require("./routes/productCategoryRoutes");
app.use("/productsCategory", productCategoryRoutes);

const orderRoutes = require("./routes/orderRoutes");
app.use("/orders", orderRoutes);

const customerRoutes = require("./routes/customerRoutes");
app.use("/customers", customerRoutes);

const userRoutes = require("./routes/userRoutes");
app.use("/users", userRoutes);

const blogRoutes = require("./routes/blogRoutes");
app.use("/blogs", blogRoutes);

const teamRoutes = require("./routes/teamRoutes");
app.use("/teams", teamRoutes);

// Additional routes to match old endpoints exactly
const productController = require("./controllers/productController");
const orderController = require("./controllers/orderController");
const customerController = require("./controllers/customerController");
const userController = require("./controllers/userController");

// These endpoints need to match your old working code exactly
app.get("/findProducts", productController.getProductsByCategory);
app.get("/featuredProduct", productController.getFeaturedProducts);
app.get("/topTrending", productController.getTopTrending);
app.get("/bestSelling", productController.getBestSelling);
app.get("/newArrival", productController.getNewArrival);
app.get("/addToCart/:id", productController.getProductForCart);

// Order endpoints
app.put("/order/:id", orderController.updateOrderStatus);

// Customer endpoints  
app.get("/customer/:id", customerController.getCustomerById);
app.delete("/customer/:id", customerController.deleteCustomer);

// Auth endpoints
app.post("/signup", userController.signup);
app.post("/login", userController.login);

// Root endpoint
app.get("/", (req, res) => {
  res.send("Running Replic Commerce Server");
});

module.exports = app;
