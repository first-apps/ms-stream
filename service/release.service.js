const { Release } = require("../model");

class ReleaseService {
  // create
  async create(data) {
    return Release.create(data);
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
  }
}

module.exports = new ReleaseService();
