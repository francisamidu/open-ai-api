import express from "express";

import { ApiService } from "../services";

const router = express.Router();

router.get("/", ApiService.get);

export default router