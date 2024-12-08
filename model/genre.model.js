// module imports
const {
  db: { mongoose },
} = require("../setup");

const genreSchema = new mongoose.Schema({
  name: String,
});

module.exports = mongoose.model("genre", genreSchema);
