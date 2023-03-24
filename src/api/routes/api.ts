const router = require("express").Router();

import use from "../middleware";
import { apiController } from "../controllers";

// Register routes
router.use("/", use(apiController));

export default router;
