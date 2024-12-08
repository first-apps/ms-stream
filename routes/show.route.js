// show CRUD

// module imports
const express = require("express");
const {
  auth: { authorize },
} = require("../middleware");
const { show: showService } = require("../service");
const showRouter = express.Router();

showRouter.post("/", authorize, async (req, res) => {
  try {
    res.status(200).json(await showService.create(req.body));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

showRouter.get("/", authorize, async (req, res) => {
  try {
    res.status(200).json(await showService.readAll());
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

showRouter.get("/:show_id", authorize, async (req, res) => {
  try {
    res.status(200).json(await showService.read(req.params.show_id));
  } catch (err) {
    res.status(err.status || 500).json({ message: err.message });
  }
});

showRouter.put("/:show_id", authorize, async (req, res) => {
  try {
    res
      .status(200)
      .json(await showService.update(req.params.show_id, req.body));
  } catch (err) {
    res.status(err.status || 500).json({ message: err.message });
  }
});

showRouter.delete("/:show_id", authorize, async (req, res) => {
  try {
    await showService.delete(req.params.show_id);
    res.status(200).json({ message: "Successfully deleted" });
  } catch (err) {
    res.status(err.status || 500).json({ message: err.message });
  }
});

module.exports = showRouter;
