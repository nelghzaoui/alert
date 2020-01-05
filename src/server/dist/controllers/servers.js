"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todo_1 = require("../models/todo");
const SERVERS = [];
exports.createServer = (req, res, next) => {
    const text = req.body.text;
    const newServer = new todo_1.Todo(Math.random().toString(), text);
    SERVERS.push(newServer);
    res.status(201).json({ message: 'Created the server.', createdServer: newServer });
};
