const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        // Rutas direción
        this.path = {
            user: '/api/user',
        }

        // Middlewares
        this.middlewares();
        // Routes
        this.routes();
    }

    middlewares() {
        // CORS
        this.app.use(cors());
        // parseo json
        this.app.use(express.json());
        // ruta de archivos
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.path.user, require('../routes/user'));
    }

    listen() {
        this.app.listen(this.port, () => console.log(`v0.0.0 port listening ${this.port}`))
    }
}

module.exports = Server;

