const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: process.env.BLOG_COLLECTION || "blogs" }
);

module.exports = mongoose.model("Blog", blogSchema);