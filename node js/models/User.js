const { Schema, model} = require('mongoose')

const UserSchema = Schema({
    name: {
        type: String,
        required: [true, 'Nombre Obligatorio']
    },
    email: {
        type: String,
        required: [true, 'Correo Obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Contraseña Obligatorio']
    },
    img: {
        type: String
    },
    rol: {
        type: String,
        default: 'USER_ROLE'
    },
    status: {
        type: Boolean,
        default: true
    }
});

UserSchema.methods.toJSON = function() {
    const {__v, ...user} = this.toObject();
    user.uid = _id;
    return user
}

module.exports = model('User', UserSchema);