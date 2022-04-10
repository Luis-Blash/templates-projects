const generateJWT = require('./generate-jwt');
const dbvalidation = require('./db-validation')


module.exports = {
    ...generateJWT,
    ...dbvalidation
}