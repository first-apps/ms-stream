const { Episode } = require("../model");

class EpisodeService {
  // create
  async create(data) {
    return Episode.create(data);
  }
  // read
  async readAll() {
    return Episode.find();
  }
  async read(episode_id) {
    const episode = await Episode.findOne({ _id: episode_id });
    if (!episode) {
      throw { status: 404, message: "Not Found" };
    }
    return episode;
  }
  // update
  async update(episode_id, data) {
    const episode = await Episode.findOneAndUpdate({ _id: episode_id }, data, {
      new: true,
    });
    if (!episode) {
      throw { status: 404, message: "Not Found" };
    }
    return episode.save();
  }
  // delete
  async delete(episode_id) {
    const episode = await Episode.findOneAndDelete({ _id: episode_id });
    if (!episode) {
      throw { status: 404, message: "Not Found" };
    }
  }
}

module.exports = new EpisodeService();
