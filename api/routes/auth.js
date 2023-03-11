import Express from "express";
import { login, logout } from "../controllers/authController.js";

const router = Express.Router();

router.post("/login", login);
router.post("/logout", logout);

export default router;
