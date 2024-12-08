// episode CRUD

// module imports
const express = require("express");
const {
  auth: { authorize },
} = require("../middleware");
const { episode: episodeService } = require("../service");
const episodeRouter = express.Router();

episodeRouter.post("/", authorize, async (req, res) => {
  try {
    res.status(200).json(await episodeService.create(req.body));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

episodeRouter.get("/", authorize, async (req, res) => {
  try {
    res.status(200).json(await episodeService.readAll());
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

episodeRouter.get("/:episode_id", authorize, async (req, res) => {
  try {
    res.status(200).json(await episodeService.read(req.params.episode_id));
  } catch (err) {
    res.status(err.status || 500).json({ message: err.message });
  }
});

episodeRouter.put("/:episode_id", authorize, async (req, res) => {
  try {
    res
      .status(200)
      .json(await episodeService.update(req.params.episode_id, req.body));
  } catch (err) {
    res.status(err.status || 500).json({ message: err.message });
  }
});

episodeRouter.delete("/:episode_id", authorize, async (req, res) => {
  try {
    await episodeService.delete(req.params.episode_id);
    res.status(200).json({ message: "Successfully deleted" });
  } catch (err) {
    res.status(err.status || 500).json({ message: err.message });
  }
});

module.exports = episodeRouter;
