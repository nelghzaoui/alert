import { RequestHandler } from 'express';

import { Todo } from '../models/todo';

const SERVERS: Todo[] = [];

export const createServer: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;
  const newServer = new Todo(Math.random().toString(), text);

  SERVERS.push(newServer);

  res.status(201).json({ message: 'Created the server.', createdServer: newServer });
};
