// module imports
const express = require("express");
const {
  episode: episodeRouter,
  genre: genreRouter,
  show: showRouter,
  release: releaseRouter,
} = require("./routes");

// config
const app = express();
app.use(express.json()); // middleware to allow app to accept json
require("dotenv").config();

// routers
app.use("/episode", episodeRouter);
app.use("/genre", genreRouter);
app.use("/show", showRouter);
app.use("/release", releaseRouter);

// initiate server
app.listen(process.env.PORT, (err) =>
  console.log(`Listening to port ${process.env.PORT}`)
);
