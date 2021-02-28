const express = require('express');

const { register , login} = require('../controllers/auth');

// const Note = require('../models/Note');
// const advancedResults = require('../middleware/advancedResults');


const router = express.Router();


router.route('/register').post(register);
router.route('/login').post(login);

module.exports = router;