// module imports
const {
  db: { mongoose },
} = require("../setup");

const episodeSchema = new mongoose.Schema({
  title: String,
  description: String,
  name: String,
  category_id: String,
  type: String,
  genre: [String],
  tags: [String],
  video_link: String,
});

module.exports = mongoose.model("episode", episodeSchema);
