const { getDB } = require("../config/database");
const { ObjectId } = require("mongodb");

exports.getAllCustomers = async (req, res) => {
  try {
    const db = getDB();
    const customers = db.collection(process.env.CUSTOMER_COLLECTION);
    const allCustomers = await customers.find({}).toArray();
    res.send(allCustomers);
  } catch (err) {
    res.status(500).json({ error: "Failed to Fetch Customers" });
  }
};

exports.getCustomerById = async (req, res) => {
  try {
    const db = getDB();
    const customers = db.collection(process.env.CUSTOMER_COLLECTION);
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    const singleCustomer = await customers.findOne(query);
    if (!singleCustomer) return res.status(404).json({ error: "Customer Not Found" });
    res.json(singleCustomer);
  } catch (err) {
    res.status(500).json({ error: "Failed to Fetch Customer" });
  }
};

exports.createCustomer = async (req, res) => {
  try {
    const db = getDB();
    const customers = db.collection(process.env.CUSTOMER_COLLECTION);
    const newCustomer = req.body;
    const result = await customers.insertOne(newCustomer);
    res.send(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to Create Customer" });
  }
};

exports.deleteCustomer = async (req, res) => {
  try {
    const db = getDB();
    const customers = db.collection(process.env.CUSTOMER_COLLECTION);
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    const remove = await customers.deleteOne(query);
    res.json(remove);
  } catch (err) {
    res.status(500).json({ error: "Failed to Delete Customer" });
  }
};