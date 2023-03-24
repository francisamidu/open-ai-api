import { Request, Response } from "express";
const ck = require("ckey");

class ApiService {
  static async get(req: Request, res: Response) {
    res.status(200).json({
      message: "Welcome to anime scraper",
    });
  }
}
export default ApiService;
