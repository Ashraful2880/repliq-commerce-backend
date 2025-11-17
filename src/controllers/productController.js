const { getDB } = require("../config/database");
const { ObjectId } = require("mongodb");

exports.getAllProducts = async (req, res) => {
  try {
    const db = getDB();
    const Products = db.collection(process.env.PRODUCT_COLLECTION);
    const FindProducts = await Products.find({}).toArray();
    res.send(FindProducts);
  } catch (err) {
    res.status(500).json({ error: "Failed to Fetch Products" });
  }
};

exports.getProductsById = async (req, res) => {
  try {
    const db = getDB();
    const Products = db.collection(process.env.PRODUCT_COLLECTION);
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    const singleProduct = await Products.findOne(query);
    if (!singleProduct) return res.status(404).json({ error: "Product Not Found" });
    res.json(singleProduct);
  } catch (err) {
    res.status(500).json({ error: "Failed to Fetch Product" });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const db = getDB();
    const Products = db.collection(process.env.PRODUCT_COLLECTION);
    const newProduct = req.body;
    const result = await Products.insertOne(newProduct);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Product Added Failed" });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const db = getDB();
    const Products = db.collection(process.env.PRODUCT_COLLECTION);
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    const updateReq = req.body;
    const result = await Products.updateOne(
      query,
      {
        $set: {
          rating: updateReq.rating,
          name: updateReq.name,
          price: updateReq.price,
          offerPrice: updateReq.offerPrice,
          category: updateReq.category,
          slug: updateReq.slug,
          SKU: updateReq.SKU,
          productImage: updateReq.productImage,
        },
      },
      { upsert: true }
    );
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Products Update Failed" });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const db = getDB();
    const Products = db.collection(process.env.PRODUCT_COLLECTION);
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    const remove = await Products.deleteOne(query);
    res.json(remove);
  } catch (err) {
    res.status(500).json({ error: "Product Delete failed" });
  }
};

exports.getProductsByCategory = async (req, res) => {
  try {
    const db = getDB();
    const Products = db.collection(process.env.PRODUCT_COLLECTION);
    const search = req.query.category;
    const products = await Products.find({}).toArray();
    const findProducts = products?.filter((value) =>
      value?.category?.includes(search)
    );
    res.send(findProducts);
  } catch (err) {
    res.status(500).json({ error: "Failed to Fetch Products by Category" });
  }
};

exports.getFeaturedProducts = async (req, res) => {
  try {
    const db = getDB();
    const Products = db.collection(process.env.PRODUCT_COLLECTION);
    const featuredData = req.query;
    const result = await Products.find({
      slug: featuredData.featured,
    }).toArray();
    res.send(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to Fetch Featured Products" });
  }
};

exports.getTopTrending = async (req, res) => {
  try {
    const db = getDB();
    const Products = db.collection(process.env.PRODUCT_COLLECTION);
    const trendingData = req.query;
    const result = await Products.find({
      slug: trendingData.trending,
    }).toArray();
    res.send(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to Fetch Trending Products" });
  }
};

exports.getBestSelling = async (req, res) => {
  try {
    const db = getDB();
    const Products = db.collection(process.env.PRODUCT_COLLECTION);
    const sellingData = req.query;
    const result = await Products.find({
      slug: sellingData.bestSellar,
    }).toArray();
    res.send(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to Fetch Best Selling Products" });
  }
};

exports.getNewArrival = async (req, res) => {
  try {
    const db = getDB();
    const Products = db.collection(process.env.PRODUCT_COLLECTION);
    const newArrivalData = req.query;
    const result = await Products.find({
      slug: newArrivalData.newArrival,
    }).toArray();
    res.send(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to Fetch New Arrival Products" });
  }
};

exports.getProductForCart = async (req, res) => {
  try {
    const db = getDB();
    const Products = db.collection(process.env.PRODUCT_COLLECTION);
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    const showOrder = await Products.findOne(query);
    res.json(showOrder);
  } catch (err) {
    res.status(500).json({ error: "Failed to Fetch Product for Cart" });
  }
};
