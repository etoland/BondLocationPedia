const { MongoClient } = require("mongodb");
const { usernames, posts } = require("./data/current-user");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// const userInfo = [];

// Object.keys(usernames).forEach((userHandle) => {
//     userInfo.push({
//         _id: userHandle,
//     })
// })

const batchImport = async () => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    // creates a new client

    //connect to the client
    await client.connect();

    //connect to the database
    const db = client.db("bondVoyage");
    console.log("connected!");

    // //and create a new collection from data
    // await db.collection("usernames").insertMany(Object.values(usernames));
    // console.log("Successfully added usernames");

    await db.collection("posts").insertMany(Object.values(posts));
    console.log("Successfully added posts");

    client.close();
  } catch (err) {
    client.close();
    console.log(err);
  }
};

const bondInfo = async () => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    // creates a new client

    //connect to the client
    await client.connect();

    //connect to the database
    const db = client.db("bondVoyage");
    console.log("connected!");

    //and create a new collection from data
    const resultOne = await db.collection("users").updateOne(
      { _id: "etoland007@gmail.com" },
      {
        $set: {
          handle: "craigcrazy",
          displayName: "Daniel Craig's Wife",
          avatarSrc: "/assets/craigcrazy.png",
          bannerSrc: "/assets/craigcrazybanner.png",
          location: "Wherever Daniel Craig currently is",
          bio: "Always on the lookout for anything Daniel Craig related in London!! Hoping to meet him in 2022!! #keepaneyeoutforselener #notastalker",
        },
      }
    );
    const resultTwo = await db.collection("users").updateOne(
      { _id: "emma.mandat-toland@mail.mcgill.ca" },
      {
        $set: {
          handle: "bondbaddie",
          displayName: "Cynthia Bond",
          avatarSrc: "/assets/bondbaddie.png",
          bannerSrc: "/assets/bondbaddiebanner.png",
          location: "Shoreditch, London",
          bio: "Just a girl working her way through Ian Fleming's London #watchoutforcraigcrazy #shesastalker",
        },
      }
    );

    client.close();
  } catch (err) {
    client.close();
    console.log(err);
  }
};
batchImport();
