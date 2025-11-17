const { getDB } = require("../config/database");

exports.getAllTeams = async (req, res) => {
  try {
    const db = getDB();
    const teams = db.collection(process.env.TEAM_COLLECTION);
    const AllTeams = await teams.find({}).toArray();
    res.send(AllTeams);
  } catch (err) {
    res.status(500).json({ error: "Failed to Fetch Teams" });
  }
};