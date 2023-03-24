import express from "express";

import { ApiService } from "../services";

const router = express.Router();

router.get("/", ApiService.index);

export default router;
