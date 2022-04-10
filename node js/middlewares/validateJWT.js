const { response } = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const validateJWT = async (req, res=response, next)=>{
    const token = req.header('x-token');
    if(!token){
        return res.status(401).json({
            msg: 'No hay token'
        })
    }
    try{
        const {uid} = jwt.verify(token, process.env.SECRETORPRIVATEKEY)
        // leer usuario
        const usuario = await User.findById(uid)

        // Usuario no existe
        if(!usuario){
            return res.status(400).json({
                msg: 'Token no valido - usuario no existe DB'
            })
        }
        
        // Verificar si el usario es estado es false
        if(!usuario.estado){
            return res.status(400).json({
                msg: 'Token no valido - usuario eliminado'
            })
        }

        // Nuevo request json de uid
        req.usuario = usuario;
        req.uid = uid;

        next();
    }catch(error){
        console.log(error)
        res.status(401).json({
            msg: 'Token no valido'
        })
    }
}

module.exports = {
    validateJWT
}