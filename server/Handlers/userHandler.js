require("dotenv").config();

const { MongoClient } = require("mongodb");
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const addNewUser = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();

    const db = client.db("bondVoyage");

    const _id = req.body._id;

    const userFound = await db.collection("users").findOne({ _id });

    if (userFound) {
      return res
        .status(400)
        .json({ status: 400, message: "User Already Exists", userFound });
    }
    const result = await db.collection("users").insertOne(req.body);

    res.status(200).json({ status: 200, message: "Success", result });

    client.close();
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ status: 400, message: "Something went wrong", error });
  }
};

const getUserByEmail = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();

    const db = client.db("bondVoyage");

    const _id = req.body._id;

    const userFound = await db
      .collection("users")
      .findOne({ _id: req.params.email });

    res.status(200).json({ status: 200, message: "Success", userFound });

    client.close();
  } catch (error) {
    client.close();
    res
      .status(400)
      .json({ status: 400, message: "Something went wrong", error });
  }
};

const getPostInfo = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();

    const db = client.db("bondVoyage");

    const posts = await db.collection("posts").find().toArray();

    res.status(200).json({ status: 200, message: "Success", posts });

    client.close();
  } catch (error) {
    client.close();
    res
      .status(400)
      .json({ status: 400, message: "Something went wrong", error });
  }
};

const postNewMessage = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  console.log(req.body, "berry");

  try {
    await client.connect();

    const db = client.db("bondVoyage");

    await db.collection("posts").insertOne({ ...req.body });

    res.status(201).json({
      status: 201,
      message: "Post succesful",
      data: { ...req.body },
    });
  } catch (err) {
    console.log(err, "peach");
    res.status(500).json({
      status: 500,
      message: "Please try again later",
    });
  } finally {
    client.close();
  }
};

module.exports = {
  addNewUser,
  getUserByEmail,
  getPostInfo,
  postNewMessage,
};
