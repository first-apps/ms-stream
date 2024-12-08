const { Genre } = require("../model");

class GenreService {
  // create
  async create(data) {
    return Genre.create(data);
  }
  // read
  async readAll() {
    return Genre.find();
  }
  async read(genre_id) {
    const genre = await Genre.findOne({ _id: genre_id });
    if (!genre) {
      throw { status: 404, message: "Not Found" };
    }
    return genre;
  }
  // update
  async update(genre_id, data) {
    const genre = await Genre.findOneAndUpdate({ _id: genre_id }, data, {
      new: true,
    });
    if (!genre) {
      throw { status: 404, message: "Not Found" };
    }
    return genre.save();
  }
  // delete
  async delete(genre_id) {
    const genre = await Genre.findOneAndDelete({ _id: genre_id });
    if (!genre) {
      throw { status: 404, message: "Not Found" };
    }
  }
}

module.exports = new GenreService();
