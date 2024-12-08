// module imports
const { Types } = require("mongoose");
const {
  db: { mongoose },
} = require("../setup");

const releaseSchema = new mongoose.Schema({
  name: String,
  show_id: Types.ObjectId,
  description: String,
  type: String,
});

module.exports = mongoose.model("release", releaseSchema);
