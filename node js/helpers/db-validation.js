const {User} = require("../models");


const userExistForId = async (correo = '') => {
    const existeUsuario = await User.findById(id);
    if (!existeUsuario) {
        throw new Error(`El usuario ${existeUsuario} existe`)
    }
}

const emailExist = async (correo = '') => {
    const existeEmail = await User.findOne({ correo });
    if (existeEmail) {
        throw new Error(`El correo ${correo} existe`)
    }
}

module.exports = {
    userExistForId,
    emailExist
}