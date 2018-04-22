import { Server } from './server';
const express = require('express');

class Router {
    constructor(private server: Server) {
    }

    getRouters() {
        var apiRouter = express.Router();
        let controllers = this.server.controllers;
        apiRouter.get('/tasks', controllers.task.list.bind(controllers.task));
        apiRouter.post('/tasks/create', controllers.task.create.bind(controllers.task));
        return apiRouter;         
    }
}

export function init(server: Server) {
    let router = new Router(server);
    return router.getRouters();
}