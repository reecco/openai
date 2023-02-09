import { completion } from './src/utils/completion';

(async () => {
  const response = Object(await completion('text-davinci-003', 'O que é o TypeScript?', 2048));

  console.log(response.data.choices);
})();