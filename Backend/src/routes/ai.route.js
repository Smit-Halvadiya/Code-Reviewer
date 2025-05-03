import { Router } from "express";
import { getResponse } from "../controllers/ai.controller.js";

const router = Router()

router.route("/get-review").post(getResponse)

export default router