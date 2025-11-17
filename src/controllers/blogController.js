const { getDB } = require("../config/database");

exports.getAllBlogs = async (req, res) => {
  try {
    const db = getDB();
    const blogs = db.collection(process.env.BLOG_COLLECTION);
    const AllBlogs = await blogs.find({}).toArray();
    res.send(AllBlogs);
  } catch (err) {
    res.status(500).json({ error: "Failed to Fetch Blogs" });
  }
};