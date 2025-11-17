const { getDB } = require("../config/database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  try {
    const db = getDB();
    const users = db.collection(process.env.USER_COLLECTION);
    
    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

    // Create a new user document
    const user = {
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      phone: req.body.phone,
      password: hashedPassword,
    };
    const findUser = await users.findOne({ phone: req.body.phone });
    if (findUser) {
      return res.status(400).send({ message: "User already exists" });
    } else {
      // Insert the user into the database
      const result = await users.insertOne(user);
      // Send a success response
      res.status(201).send(result);
    }
  } catch (err) {
    // Send an error response
    res.status(400).send(err);
  }
};

exports.login = async (req, res) => {
  try {
    const db = getDB();
    const users = db.collection(process.env.USER_COLLECTION);
    
    // Find the user by phone number
    const user = await users.findOne({ phone: req.body.phone });

    // If the user is not found, send an error response
    if (!user) {
      return res
        .status(401)
        .send({ message: "Phone number or password is incorrect" });
    }

    // Compare the password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      user.password
    );

    // If the password is not valid, send an error response
    if (!isPasswordValid) {
      return res
        .status(401)
        .send({ message: "Phone number or password is incorrect" });
    }

    // Generate a JWT token
    const token = jwt.sign({ phone: user.phone }, "secret");

    // Send the token in the response
    res.send({ token, phone: user.phone });
  } catch (err) {
    // Send an error response
    res.status(400).send(err);
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const db = getDB();
    const users = db.collection(process.env.USER_COLLECTION);
    const allUsers = await users.find({}).toArray();
    res.send(allUsers);
  } catch (err) {
    res.status(500).json({ error: "Failed to Fetch Users" });
  }
};

exports.createUser = async (req, res) => {
  try {
    const db = getDB();
    const users = db.collection(process.env.USER_COLLECTION);
    const newUser = req.body;
    const result = await users.insertOne(newUser);
    res.send(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to Create User" });
  }
};