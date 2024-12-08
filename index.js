// module imports
const express = require("express");
const { episode: episodeRouter } = require("./routes");

// config
const app = express();
app.use(express.json()); // middleware to allow app to accept json
require("dotenv").config();

// routers
app.use("/episode", episodeRouter);

// initiate server
app.listen(process.env.PORT, (err) =>
  console.log(`Listening to port ${process.env.PORT}`)
);
