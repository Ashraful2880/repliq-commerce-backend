const { MongoClient } = require("mongodb");
require('dotenv').config();

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.eb0xvvp.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri);

let database = null;

async function connectDB() {
  try {
    if (!client.topology || !client.topology.isConnected()) {
      await client.connect();
    }
    database = client.db(`${process.env.DB_NAME}`);
    console.log("MongoDB Connected Successfully");
    return database;
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    throw error;
  }
}

function getDB() {
  if (!database) {
    throw new Error("Database not connected. Call connectDB first.");
  }
  return database;
}

module.exports = { client, connectDB, getDB };