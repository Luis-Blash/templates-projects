const { Router } = require('express');
const { check } = require('express-validator');

// Controller
const { getUsers, getUserOne , putUser, postUser, deleteUser } = require('../controller/user');
// Middlewares
const {
    validateJWT,
    validateData
} = require('../middlewares')

// Helpers 
const { emailExist, userExistForId } = require('../helpers');
// ---
const routes = Router();

// GET usuario
routes.get('/', getUsers);


routes.get('/:id',[
    check('id', 'No es un id valido').isMongoId(),
    validateData
], getUserOne);

routes.put('/:id',[
    check('id', 'No es un id valido').isMongoId(),
    check('id').custom(userExistForId),
    validateData
], putUser);


routes.post('/',[
    check('nombre', "El nombre es obligatorio").not().isEmpty(),
    check('password', "El password es obligatorio y mas de 6 letras").isLength({min:6}),
    check('correo').custom(emailExist),
    validateData
] ,postUser);


routes.delete('/:id',[
    validateJWT,
    check('id', 'No es un id valido').isMongoId(),
    check('id').custom(userExistForId),
    validateData
], deleteUser);

module.exports = routes;