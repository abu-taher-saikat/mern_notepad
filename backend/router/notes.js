const express = require('express');

const { createNote ,getAllNote, getNoteByID, updateNote , deleteNote} = require('../controllers/notes');

const router = express.Router();


router.route('/').post(createNote).get(getAllNote);
router.route('/:id').get(getNoteByID).put(updateNote).delete(deleteNote);

module.exports = router;