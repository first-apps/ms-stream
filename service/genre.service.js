const { Genre, Show } = require("../model");

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
    const oldGenre = await this.read(genre_id);
    const genre = await Genre.findOneAndUpdate({ _id: genre_id }, data, {
      new: true,
    });
    const newGenre = await genre.save();

    // update shows containing this genre
    await Show.updateMany(
      { genre: oldGenre.name },
      { $set: { "genre.$": newGenre.name } }
    );
    return newGenre;
  }
  // delete
  async delete(genre_id) {
    const genre = await Genre.findOneAndDelete({ _id: genre_id });
    if (!genre) {
      throw { status: 404, message: "Not Found" };
    }
    // remove this genre in shows where it is assigned
    await Show.updateMany(
      { genre: genre.name },
      { $pull: { genre: genre.name } }
    );
  }
}

module.exports = new GenreService();
