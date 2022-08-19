const express = require("express");
const router = express.Router();

//Middlewares
const checkId = require("../middlewares/checkId");

//Controllers
const { getAll, getNote, createNote, updateNote, deleteNote } = require("../controllers/noteController");

router.route("/").get(getAll).post(createNote);

router.param("id", checkId);
router.route("/:id").get(getNote).patch(updateNote).delete(deleteNote);

module.exports = router;
