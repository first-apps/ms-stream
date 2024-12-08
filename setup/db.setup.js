// module import
const mongoose = require("mongoose");

// config
require("dotenv").config();

// db setup
mongoose.connect(process.env.MONGODB_URL);
const db = mongoose.connection;
db.on("open", () => console.log("Connected to ms-stream DB"));
db.on("error", (error) =>
  console.log("DB error while connecting to ms-stream", error)
);

module.exports = {
  db,
  mongoose,
};
