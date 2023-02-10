import cors from 'cors';
import { Express, NextFunction, Request, Response } from 'express';

export default function access(app: Express) {
  app.use((req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'GET,POST');
    app.use(cors());
    next();
  });
}