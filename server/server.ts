import { Express } from 'express';
import { DBDriver } from './types/DBDriver';
import { DBLoader } from './db_driver';
import { init as initializeModel } from './model';
import { init as initializeController } from './controller';
import { init as initializeService } from './service';
import { init as initializeRoutes } from './routes';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config')(process.env.NODE_ENV || 'development');

export class Server {
    public app: Express;
    private httpServer: any;
    private db: DBDriver;
    private models: any;
    public controllers: any;
    private services: any;
    private routes: any;

    constructor() {
        this.app = express();
    }

    start(listener: Function) {
        return DBLoader.load(config)
        .then(this.storeDBIns.bind(this))
        .then(this.initializeMVC.bind(this))
        .then(this.startApp.bind(this, listener));
    }

    private storeDBIns(db: DBDriver) {
        this.db = db;
    }

    initializeMVC() {
        this.models = initializeModel(this.db);
        this.services = initializeService(this.models);
        this.controllers = initializeController(this.services);
        this.routes = initializeRoutes(this);
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use('/api/v0.1/', this.routes);
    }

    private startApp(listener: Function) {
        let host = config.get('server').host;
        let port = config.get('server').port;
        this.httpServer = this.app.listen(port, host);
        this.httpServer.on('listening', listener.bind(null, host, port));
    }
}