const router = require("express").Router();

import { apiController } from "../controllers";

// Register routes
router.use("/", apiController);

export default router;
