const { Release } = require("../model");

class ReleaseService {
  // create
  async create(data) {
    const lastRelease = await Release.findOne({ show_id: data.show_id }).sort({
      sequence: -1,
    });
    return Release.create({
      ...data,
      sequence: (lastRelease?.sequence || 0) + 1,
    });
  }
  // read
  async readAll() {
    return Release.find();
  }
  async read(release_id) {
    const release = await Release.findOne({ _id: release_id });
    if (!release) {
      throw { status: 404, message: "Not Found" };
    }
    return release;
  }
  // update
  async update(release_id, data) {
    const release = await Release.findOneAndUpdate({ _id: release_id }, data, {
      new: true,
    });
    if (!release) {
      throw { status: 404, message: "Not Found" };
    }
    return release.save();
  }
  // delete
  async delete(release_id) {
    const release = await Release.findOneAndDelete({ _id: release_id });
    if (!release) {
      throw { status: 404, message: "Not Found" };
    }
    // update the following sequence
    await Release.updateMany(
      { show_id: release.show_id, sequence: { $gt: release.sequence } },
      { $inc: { sequence: -1 } }
    );
  }
}

module.exports = new ReleaseService();
