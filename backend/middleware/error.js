const ErrorResponse = require('../utils/ErrorResponse');

const errorHandler = (err, req,res, next)=> {
    // Log to console for developer
    // console.log(err.stack.red);
    let error = {...err};

    console.log(err.name);

    // Mongose bad ObjectID
    if(err.name === 'CastError'){
        const message = `Resourse not found with id of ${err.value}`;
        error = new ErrorResponse(message, 404);
    }

    res.status(err.statusCode || 500).json({
        success : false,
        error : err.message || 'Server Error'
    })
}


module.exports = errorHandler;