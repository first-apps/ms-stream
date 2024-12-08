// genre CRUD

// module imports
const express = require("express");
const {
  auth: { authorize },
} = require("../middleware");
const { genre: genreService } = require("../service");
const genreRouter = express.Router();

genreRouter.post("/", authorize, async (req, res) => {
  try {
    res.status(200).json(await genreService.create(req.body));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

genreRouter.get("/", authorize, async (req, res) => {
  try {
    res.status(200).json(await genreService.readAll());
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

genreRouter.get("/:genre_id", authorize, async (req, res) => {
  try {
    res.status(200).json(await genreService.read(req.params.genre_id));
  } catch (err) {
    res.status(err.status || 500).json({ message: err.message });
  }
});

genreRouter.put("/:genre_id", authorize, async (req, res) => {
  try {
    res
      .status(200)
      .json(await genreService.update(req.params.genre_id, req.body));
  } catch (err) {
    res.status(err.status || 500).json({ message: err.message });
  }
});

genreRouter.delete("/:genre_id", authorize, async (req, res) => {
  try {
    await genreService.delete(req.params.genre_id);
    res.status(200).json({ message: "Successfully deleted" });
  } catch (err) {
    res.status(err.status || 500).json({ message: err.message });
  }
});

module.exports = genreRouter;
