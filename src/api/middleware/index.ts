import { Request, Response, NextFunction } from "express";

const use =
  (fun: (req: Request, res: Response, next: NextFunction) => any) =>
  (req: Request, res: Response, next: NextFunction) => {
    return Promise.resolve(fun(req, res, next)).catch(next);
  };

export default use;
