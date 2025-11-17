const { getDB } = require("../config/database");
const { ObjectId } = require("mongodb");

exports.getAllOrders = async (req, res) => {
  try {
    const db = getDB();
    const Orders = db.collection(process.env.ORDER_COLLECTION);
    const allOrders = await Orders.find({}).toArray();
    res.send(allOrders);
  } catch (err) {
    res.status(500).json({ error: "Failed to Fetch Orders" });
  }
};

exports.updateOrderStatus = async (req, res) => {
  try {
    const db = getDB();
    const Orders = db.collection(process.env.ORDER_COLLECTION);
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    const orderStatus = req.body;
    const result = await Orders.updateOne(
      query,
      {
        $set: { status: orderStatus.status },
      },
      { upsert: true }
    );
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to Update Order Status" });
  }
};

exports.createOrder = async (req, res) => {
  try {
    const db = getDB();
    const Orders = db.collection(process.env.ORDER_COLLECTION);
    const newOrder = req.body;
    const result = await Orders.insertOne(newOrder);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to Create Order" });
  }
};