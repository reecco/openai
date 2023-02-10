import express from 'express';

import access from './middlewares/cors';
import router from './routes';

const app = express();

access(app);

app.use(
  express.json(),
  router
);

export default app;