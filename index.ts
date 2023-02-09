import { config } from 'dotenv';
import { completion } from './src/utils/completion';
config();

(async () => {
  const res = Object(await completion('text-davinci-003', 'O que é o TypeScript?', 2048));

  console.log(res.data.choices);
})();