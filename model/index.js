// schema definition, model creation

const episodeModel = require("./episode.model");
const genreModel = require("./genre.model");
const showModel = require("./show.model");
const releaseModel = require("./release.model");

module.exports = {
  Episode: episodeModel,
  Genre: genreModel,
  Show: showModel,
  Release: releaseModel,
};
