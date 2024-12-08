const { Show } = require("../model");

class ShowService {
  // create
  async create(data) {
    return Show.create(data);
  }
  // read
  async readAll() {
    return Show.find();
  }
  async read(show_id) {
    const show = await Show.findOne({ _id: show_id });
    if (!show) {
      throw { status: 404, message: "Not Found" };
    }
    return show;
  }
  // update
  async update(show_id, data) {
    const show = await Show.findOneAndUpdate({ _id: show_id }, data, {
      new: true,
    });
    if (!show) {
      throw { status: 404, message: "Not Found" };
    }
    return show.save();
  }
  // delete
  async delete(show_id) {
    const show = await Show.findOneAndDelete({ _id: show_id });
    if (!show) {
      throw { status: 404, message: "Not Found" };
    }
  }
}

module.exports = new ShowService();
