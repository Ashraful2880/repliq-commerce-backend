const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    // Define fields based on usage, assuming order has items, total, status, etc.
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
    },
    items: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
      },
    ],
    total: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      default: "pending",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: process.env.ORDER_COLLECTION || "orders" }
);

module.exports = mongoose.model("Order", orderSchema);