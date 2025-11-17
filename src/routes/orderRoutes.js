const express = require("express");
const orderController = require("../controllers/orderController");

const router = express.Router();

router.get("/", orderController.getAllOrders);
router.put("/:id", orderController.updateOrderStatus);
router.post("/", orderController.createOrder);

module.exports = router;