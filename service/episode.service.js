const { Episode } = require("../model");

class EpisodeService {
  // create
  async create(data) {
    const lastEpisode = await Episode.findOne({
      release_id: data.release_id,
    }).sort({ sequence: -1 });
    return Episode.create({
      ...data,
      sequence: (lastEpisode?.sequence || 0) + 1,
    });
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
    // update the following episodes
    await Episode.updateMany(
      { release_id: episode.release_id, sequence: { $gt: episode.sequence } },
      { $inc: { sequence: -1 } }
    );
  }
}

module.exports = new EpisodeService();
