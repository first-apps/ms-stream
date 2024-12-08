// release CRUD

// module imports
const express = require("express");
const {
  auth: { authorize },
} = require("../middleware");
const { release: releaseService } = require("../service");
const releaseRouter = express.Router();

releaseRouter.post("/", authorize, async (req, res) => {
  try {
    res.status(200).json(await releaseService.create(req.body));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

releaseRouter.get("/", authorize, async (req, res) => {
  try {
    res.status(200).json(await releaseService.readAll());
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

releaseRouter.get("/:release_id", authorize, async (req, res) => {
  try {
    res.status(200).json(await releaseService.read(req.params.release_id));
  } catch (err) {
    res.status(err.status || 500).json({ message: err.message });
  }
});

releaseRouter.put("/:release_id", authorize, async (req, res) => {
  try {
    res
      .status(200)
      .json(await releaseService.update(req.params.release_id, req.body));
  } catch (err) {
    res.status(err.status || 500).json({ message: err.message });
  }
});

releaseRouter.delete("/:release_id", authorize, async (req, res) => {
  try {
    await releaseService.delete(req.params.release_id);
    res.status(200).json({ message: "Successfully deleted" });
  } catch (err) {
    res.status(err.status || 500).json({ message: err.message });
  }
});

module.exports = releaseRouter;
