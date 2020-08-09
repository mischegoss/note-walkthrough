var router = require("express").Router();
var store = require("../db/store");

// GET "/api/notes" responds with all notes from the database
router.get("/notes", function(req, res) {
  // We will get this stuff from the store
});

module.exports = router;