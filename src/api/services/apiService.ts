import { Request, Response } from "express";
import { Configuration, OpenAIApi } from "openai";
import { validationResult } from "express-validator";
import { errorFormatter } from "../utils";
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
  static async complete(req: Request, res: Response) {
    const result = validationResult(req).formatWith(errorFormatter);

    if (!result.isEmpty()) {
      return res.json({ errors: result.array() });
    }

    const { prompt } = req.body;

    const code = await openaiApi.createCompletion({
      model: "text-davinci-003",
      prompt,
    });

    res.status(200).json({
      result: code.data.choices[0].text,
    });
  }

  static async translate(req: Request, res: Response) {
    const result = validationResult(req).formatWith(errorFormatter);

    if (!result.isEmpty()) {
      return res.json({ errors: result.array() });
    }

    const { prompt } = req.body;

    const code = await openaiApi.createCompletion({
      model: "cushman:2020-05-03",
      prompt,
    });

    const response = await openaiApi.listModels();

    if (code.status > 200) {
      res.status(code.status).json({
        errors: [
          {
            message: code.statusText,
          },
        ],
      });
    }

    res.status(200).json({
      result: response.data,
    });
  }
}
export default ApiService;
