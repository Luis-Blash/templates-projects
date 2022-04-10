const { validationResult } = require('express-validator');

const validateData = (req, res, next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.status(400).json({msg: "Errores en validación", errors});
    }else{
        next();
    }
}

module.exports = {
    validateData
}