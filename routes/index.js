// create apis, acts as controller layer

const episodeRouter = require("./episode.route");

module.exports = {
  episode: episodeRouter,
};
