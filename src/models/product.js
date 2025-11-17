const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    offerPrice: {
      type: Number,
    },
    category: {
      type: String,
    },
    slug: {
      type: String,
    },
    SKU: {
      type: String,
    },
    productImage: {
      type: String,
    },
    rating: {
      type: Number,
    },
    description: {
      type: String,
    },
    stock: {
      type: Number,
      default: 0,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    trending: {
      type: Boolean,
      default: false,
    },
    bestSellar: {
      type: Boolean,
      default: false,
    },
    newArrival: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: process.env.PRODUCT_COLLECTION || "products" }
);

module.exports = mongoose.model("Product", productSchema);
