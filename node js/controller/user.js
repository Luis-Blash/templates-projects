const { response } = require('express')
const bcryptjs = require('bcryptjs');
// importacion del modelo
const {User} = require('../models');


const getUsers = async (req, res = response) => {
    const { limit = 5, start = 0 } = req.query;
    const query = { status: true}
    const [total, users] = await Promise.all([
        User.countDocuments(query),
        User.find(query)
        .skip(Number(start))
        .limit(Number(limit))
    ]);

    res.status(200).json({
        total,
        users
    })
}

const getUserOne = async (req, res = response) => {
    const { id } = req.params;
    const user = User.findById(id)
    res.status(200).json(user)
}

const putUser = async (req, res = response) => {
    const { id } = req.params;
    const { _id, password, email, ...rest } = req.body;

    if (password) {
        // Encriptar
        const salt = bcryptjs.genSaltSync();
        rest.password = bcryptjs.hashSync(password, salt);
    }

    // verifacar contra base de datos y actualizar
    const user = await User.findByIdAndUpdate(id, rest);

    res.status(200).json(user)
}

const postUser = async (req, res = response) => {
    const { name, email, password, rol } = req.body;
    // creamos instancia
    const user = new User({ nombre: name, correo: email, password, rol });

    // Encriptar
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password, salt);

    // Guardar
    await user.save();

    res.status(200).json(user)
}

const deleteUser = async (req, res = response) => {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, {status: false});
    res.status(200).json(user)
}

module.exports = {
    getUsers,
    getUserOne,
    putUser,
    postUser,
    deleteUser
}

