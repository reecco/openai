import { NextFunction, Request, Response } from "express";

export default function authorization(req: Request, res: Response, next: NextFunction) {
  const sys = String(process.env.TOKEN);
  const auth = req.headers['authorization'];

  const token = auth ? auth.split(' ')[1] : '';

  if (token !== sys)
    return res.json({ message: 'Invalid token.', code: 401 });

  next();
}