// create apis, acts as controller layer

const episodeRouter = require("./episode.route");
const genreRouter = require("./genre.route");
const showRouter = require("./show.route");
const releaseRouter = require("./release.route");

module.exports = {
  episode: episodeRouter,
  genre: genreRouter,
  show: showRouter,
  release: releaseRouter,
};
