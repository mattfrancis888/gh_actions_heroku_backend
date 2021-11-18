import { Router, Request, Response } from "express";

import { getMyFood, insertMyFood } from "../controllers/food";

const router = Router();

router.get("/my-food", getMyFood);
router.post("/my-food", insertMyFood);
export default router;
