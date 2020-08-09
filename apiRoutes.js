var router = require("express").Router();
var store = require("../db/store");

// GET "/api/notes" responds with all notes from the database
router.get("/notes", function(req, res) {

  store
    .getNotes()
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
  
});

module.exports = router;


