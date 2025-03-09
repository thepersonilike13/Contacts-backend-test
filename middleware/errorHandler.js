const {constants} = require("../constants");
const errorHandler = (err,req,res,next) => {
    const statusCode = res.statusCode ? res.statusCode:500;
    switch(statusCode){
    case constants.UNAUTHORIZED:
    res.json({title: "Not found",
        message: err.message, 
        stackTrace: err.stack});

    case constants.VALIDATION_ERROR:
    res.json({title: "Validation failed",
        message: err.message, 
        stackTrace: err.stack});
    
    case constants.FORBIDDEN:
        res.json({title: "FORBIDDEN",
            message: err.message, 
            stackTrace: err.stack});
        
        case constants.NOT_FOUND:
    res.json({title: "Validation failed",
        message: err.message, 
        stackTrace: err.stack});
    
    case 500:
        res.json({title: "Validation failed",
            message: err.message, 
            stackTrace: err.stack});
        
    
};
}

module.exports = errorHandler;