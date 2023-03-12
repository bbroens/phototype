import express from "express";
import { getUser, updateUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/find/:user_id", getUser);
router.put("/", updateUser);

export default router;
