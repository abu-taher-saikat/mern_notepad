const express = require('express');

const { createNote ,getAllNote, getNoteByID, updateNote , deleteNote} = require('../controllers/notes');

const Note = require('../models/Note');
const advancedResults = require('../middleware/advancedResults');


const router = express.Router();
const {protect} = require('../middleware/auth');


router.route('/').post(protect, createNote).get(advancedResults(Note), getAllNote);
router.route('/:id').get(getNoteByID).put(updateNote).delete(deleteNote);

module.exports = router;