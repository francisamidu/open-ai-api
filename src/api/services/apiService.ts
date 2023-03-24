import { Request, Response } from "express";
import { Configuration, OpenAIApi } from "openai";
const ck = require("ckey");

const configuration = new Configuration({
  apiKey: ck.OPENAI_SECRET_KEY,
});
const openaiApi = new OpenAIApi(configuration);

class ApiService {
  static async index(req: Request, res: Response) {
    res.status(200).json({
      message: "Welcome to anime scraper",
    });
  }
  static async complete(req: Request, res: Response) {}

  static async translate(req: Request, res: Response) {}
}
export default ApiService;
