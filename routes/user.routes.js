import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUsersForSiderbar } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", protectRoute, getUsersForSiderbar);

export default router;
