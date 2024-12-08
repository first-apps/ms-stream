// middleware setup

const authMiddleware = require("./auth.middleware");

module.exports = {
  auth: authMiddleware,
};
