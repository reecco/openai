import { Configuration, OpenAIApi } from "openai";
import { config } from "dotenv";

config();

export const openai = new OpenAIApi(
  new Configuration({ apiKey: process.env.KEY })
);