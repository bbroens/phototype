import Express from "express";
import { register, login, logout } from "../controllers/authController.js";

const router = Express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

export default router;
