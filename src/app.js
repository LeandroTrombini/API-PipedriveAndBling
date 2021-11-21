const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');
require('./database/Connection');


class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use((req, res, next) => {
            res.header("Acces-Controll-Allow-Origin", "*");
            res.header("Acces-Controll-Allow-Methods", "GET, POST, PUT, DELETE");
            res.header("Acces-Controll-Allow-Headers", "Access, Content-type, Authorization, Acept, Origin, X-Requested-With");

            this.app.use(cors());
            next();
        })
    }

    routes() {
        this.app.use(routes);
    }
}

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));

module.exports = new App().app