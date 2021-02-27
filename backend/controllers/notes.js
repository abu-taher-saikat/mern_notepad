const Note = require('../models/Note');
const ErrorResponse = require('../utils/ErrorResponse');
const asyncHandler = require('../middleware/async');


// @desc   create a note
// @route  POST /api/v1/note
// @access Privet
exports.createNote = asyncHandler(async(req, res, next) => {
    const note = await Note.create(req.body);

    if(!note){
        return next(new ErrorResponse(`can't find things on req.body`, 400 ));
    }

    res.status(201).json({
        success : true,
        data : note
    })
});


// @desc   get all Notes
// @route  GET /api/v1/note/
// @access Privet
exports.getAllNote = asyncHandler(async(req, res, next) => {
    let query ;
    let queryStr = JSON.stringify(req.query);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`);

    query = Note.find(JSON.parse(queryStr));

    const note = await query;
    
    if(!note){
        return next(new ErrorResponse(`can't find notes`, 400 ));
    }
    res.status(201).json({
        success : true,
        count : note.length,
        data : note
    })
});

// @desc   update a note with id.
// @route  PUT /api/v1/note/:id
// @access Privet
exports.updateNote = asyncHandler(async(req, res, next) => {
    const note = await Note.findByIdAndUpdate(req.params.id, req.body, {
        new : true,
        runValidators : true
    });

    if(!note){
        return next(new ErrorResponse(`can't find notes with this id ${req.params.id}`, 400 ));
    }

    res.status(201).json({
        success : true,
        data : note
    })
});



// @desc   Delete a note with id.
// @route  DELETE /api/v1/note/:id
// @access Privet
exports.deleteNote = asyncHandler(async(req, res, next) => {
    const note = await Note.findById(req.params.id);

    if(!note){
        return next(new ErrorResponse(`can't find notes with this id ${req.params.id}`, 400 ));
    }

    note.remove();

    res.status(200).json({
        success : true,
        data : {}
    })
});




// @desc   get a single post by id.
// @route  GET /api/v1/note/:id
// @access Privet
exports.getNoteByID = asyncHandler(async(req, res, next) => {
    const note = await Note.findById(req.params.id);
    
    if(!note){
        return next(new ErrorResponse(`can't find notes with this id ${req.params.id}`, 400 ));
    }
    res.status(201).json({
        success : true,
        data : note
    })
});