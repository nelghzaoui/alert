import express, { Express, Request, Response, NextFunction } from 'express';
import { json } from 'body-parser';

import todoRoutes from './routes/servers';

const app: Express = express();

/* Middleware that parse the body of every body request */
app.use(json());

app.use('/servers', todoRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(3000);
