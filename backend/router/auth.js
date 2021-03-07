const express = require('express');

const { register , login, getMe, forgotpassword, resetPassword} = require('../controllers/auth');

// const Note = require('../models/Note');
// const advancedResults = require('../middleware/advancedResults');


const router = express.Router();
const {protect} = require('../middleware/auth');


router.route('/register').post(register);
router.route('/login').post(login);
router.route('/me').get(protect, getMe);
router.route('/forgotpassword').post(forgotpassword);
router.route('/resetpassword/:resettoken').put(resetPassword)

module.exports = router;