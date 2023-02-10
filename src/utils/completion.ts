import openai from '../config/';

export default async function completion(model: string, prompt: string, max_tokens: number) {
  try {
    return await openai.createCompletion({
      model,
      prompt,
      max_tokens
    });
  } catch (error: any) {
    return new Error(error);
  }
}