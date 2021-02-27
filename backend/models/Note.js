const mongoose = require('mongoose');

NoteSchema = mongoose.Schema({
    title : {
        type : String,
        required : [true, 'Please add a title'],
    },
    notebody : {
        type : String,
        required : [true, 'Please add note body'],
        maxlength : [500, 'note body must be under 5000 word' ]
    },
    createdAt : {
       type : Date,
       default : Date.now
    },
    tags : {
        type : [String],
        required : true
    }
})


module.exports = mongoose.model('Note', NoteSchema);