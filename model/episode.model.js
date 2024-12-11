// module imports
const { Types } = require("mongoose");
const {
  db: { mongoose },
} = require("../setup");

const episodeSchema = new mongoose.Schema({
  name: String,
  description: String,
  show_id: Types.ObjectId,
  release_id: Types.ObjectId,
  video_link: String,
  sequence: Number,
});

module.exports = mongoose.model("episode", episodeSchema);
