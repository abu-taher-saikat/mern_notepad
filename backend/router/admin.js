const express = require('express');

const {getAllUser,getSingleUser, getAllNote, getSingleNote, deleteUser, deleteNote } = require('../controllers/admin');


const router = express.Router();
const {protect} = require('../middleware/auth');


router.route('/users').get(getAllUser);
router.route('/users/:id').get(getSingleUser).delete(deleteUser);
router.route('/notes').get(getAllNote);
router.route('/notes/:id').get(getSingleNote).delete(deleteNote);


module.exports = router;