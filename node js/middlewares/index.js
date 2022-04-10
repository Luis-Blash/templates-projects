

const validateData  = require('./validateData');
const validateJWT = require('./validateJWT');


module.exports = {
    ...validateData,
    ...validateJWT
}