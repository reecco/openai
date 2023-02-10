import { Request, Response, Router } from "express";

import auth from "../middlewares/auth";
import completion from "../utils/completion";

const router = Router();

router.get('/', (req: Request, res: Response) => res.json({ title: 'Ask me' }));

router.post('/completion', auth, async (req: Request, res: Response) => {
  const model: string = req.body.model;
  const text: string = req.body.text;
  const max_tokens: number = req.body.max_tokens;

  if (!model || !text || !max_tokens)
    return res.json({ message: 'Invalid request.' });

  const response = Object(await completion(model, text, max_tokens));

  if (response.code === 400)
    return res.json({ response, code: 400 });

  return res.json({ response: response.data, code: 200 });
});

export default router;