const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  return res.send("Auth");
});

module.exports = router;
