const express = require("express");
const router = express.Router();
// Import messages
const messages = require("../public/messages");

// Specifies routes on object
router.get("/", (req, res) => {
  res.render("new", { title: "New" });
});

router.post("/", (req, res) => {
  const author = req.body.author;
  const message = req.body.message;
  messages.push({
    text: message,
    user: author,
    added: new Date(),
  });
  res.redirect("/");
});
module.exports = router;
