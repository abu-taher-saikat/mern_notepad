const express = require('express');

const { createNote ,getAllNote, getNoteByID, updateNote , deleteNote} = require('../controllers/notes');

const Note = require('../models/Note');
const advancedResults = require('../middleware/advancedResults');


const router = express.Router();
const {protect, authorize} = require('../middleware/auth');


router.route('/').post(protect, authorize('admin','user'), createNote).get(advancedResults(Note), getAllNote);
router.route('/:id')
    .get(protect,authorize('admin','user'), getNoteByID)
    .put(protect,authorize('admin','user'), updateNote)
    .delete(protect,authorize('admin','user'), deleteNote);

module.exports = router;