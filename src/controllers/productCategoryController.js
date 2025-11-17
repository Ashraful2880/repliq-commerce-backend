const { getDB } = require("../config/database");

exports.getAllProductCategories = async (req, res) => {
  try {
    const db = getDB();
    const ProductCategory = db.collection(process.env.PRODUCT_CATEGORY_COLLECTION);
    const allCategory = await ProductCategory.find({}).toArray();
    res.send(allCategory);
  } catch (err) {
    res.status(500).json({ error: "Category Load Error" });
  }
};
