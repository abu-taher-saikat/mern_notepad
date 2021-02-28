const User = require('../models/User');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/ErrorResponse');


// @desc   Register a user
// @route  POST /api/v1/auth/register
// @access Public
exports.register = asyncHandler(async(req, res, next) => {
    const {name, email, password, role} = req.body;

    // Create user 
    const user = await User.create({
        name,
        email, 
        password,
        role
    })

    // Create token .
    const token = user.getSignedJwtToken();


    res.status(200).json({success : true, token , data : user});
})


// @desc   Login a user
// @route  POST /api/v1/auth/register
// @access Public
exports.login = asyncHandler(async(req, res, next) => {
    const {name, email, password, role} = req.body;

    // Create user 
    const user = await User.create({
        name,
        email, 
        password,
        role
    })

    // Create token .
    const token = user.getSignedJwtToken();


    res.status(200).json({success : true, token , data : user});
})
