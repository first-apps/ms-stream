// module imports
const {
  db: { mongoose },
} = require("../setup");

const showSchema = new mongoose.Schema({
  name: String,
  description: String,
  genre: [String],
});

module.exports = mongoose.model("show", showSchema);
