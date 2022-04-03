const express = require("express");
const router = express.Router();
// Import messages
const messages = require("../public/messages");

// Specifies a route on the object
router.get("/", (req, res) => {
  res.render("index", { title: "Home", messages });
});

module.exports = router;
