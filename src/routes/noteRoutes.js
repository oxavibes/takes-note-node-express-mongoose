const express = require('express')
const router = express.Router()
const NoteController = require('../controllers/noteController')

router.route('/').get(NoteController.getAll);

module.exports = router;