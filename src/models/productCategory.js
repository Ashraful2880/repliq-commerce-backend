const mongoose = require("mongoose");

const productCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: process.env.PRODUCT_CATEGORY_COLLECTION || "productCategories" }
);

module.exports = mongoose.model("ProductCategory", productCategorySchema);
