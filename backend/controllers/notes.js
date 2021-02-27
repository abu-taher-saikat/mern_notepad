const Note = require('../models/Note');



// @desc   create a note
// @route  POST /api/v1/note
// @access Privet
exports.createNote = async(req, res, next) => {
    try{
        const note = await Note.create(req.body);

        res.status(201).json({
            success : true,
            data : note
        })
    }catch(err){
        res.status(400).json({success : false});
    }

    next()
}