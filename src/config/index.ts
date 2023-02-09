import { Configuration, OpenAIApi } from "openai";
import { config } from "dotenv";

config();

export default new OpenAIApi(
  new Configuration({ apiKey: process.env.KEY })
);