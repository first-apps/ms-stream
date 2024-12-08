// business logic, database communication
const episodeService = require("./episode.service");
const genreService = require("./genre.service");
const showService = require("./show.service");
const releaseService = require("./release.service");

module.exports = {
  episode: episodeService,
  genre: genreService,
  show: showService,
  release: releaseService,
};
