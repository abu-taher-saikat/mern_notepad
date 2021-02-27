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

    // next()
}


// @desc   get all Notes
// @route  GET /api/v1/note/
// @access Privet
exports.getAllNote = async(req, res, next) => {
    try{
        const note = await Note.find();
        if(!note){
            return res.status(400).json({success : false, message : "no note found"})
        }
        res.status(201).json({
            success : true,
            count : note.length,
            data : note
        })
    }catch(err){
        res.status(400).json({success : false});
    }
    // next()
}

// @desc   update a note with id.
// @route  PUT /api/v1/note/:id
// @access Privet
exports.updateNote = async(req, res, next) => {
    try{
        const note = await Note.findByIdAndUpdate(req.params.id, req.body, {
            new : true,
            runValidators : true
        });

        if(!note){
            return res.status(400).json({success : false, message : "no note found"})
        }

        res.status(201).json({
            success : true,
            data : note
        })
    }catch(err){
        res.status(400).json({success : false});
    }
    // next()
}

// @desc   Delete a note with id.
// @route  DELETE /api/v1/note/:id
// @access Privet
exports.deleteNote = async(req, res, next) => {
    try{
        const note = await Note.findById(req.params.id);

        if(!note){
            return res.status(400).json({success : false, message : "no note found"})
        }

        note.remove();

        res.status(200).json({
            success : true,
            data : {}
        })
    }catch(err){
        res.status(400).json({success : false});
    }
    // next()
}




// @desc   get a single post by id.
// @route  GET /api/v1/note/:id
// @access Privet
exports.getNoteByID = async(req, res, next) => {
    try{
        const note = await Note.findById(req.params.id);
        if(!note){
            return res.status(400).json({success : false})
        }
        res.status(201).json({
            success : true,
            data : note
        })
    }catch(err){
        res.status(400).json({success : false});
    }
    // next()
}