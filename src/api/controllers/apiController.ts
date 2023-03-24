import express from "express";

import { body } from "express-validator";
import validate from "../middleware/validator";

import { ApiService } from "../services";

const router = express.Router();

router.get("/", ApiService.index);

router.post(
  "/complete",
  body("prompt")
    .isLength({
      min: 2,
    })
    .custom(validate),
  ApiService.complete
);

router.post("/translate", body(), ApiService.translate);

export default router;
