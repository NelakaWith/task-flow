// routes/auth.js
import { Router } from "express";
import { register, login } from "../controllers/authController.js";
import auth from "../middleware/auth.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me", auth, (req, res) => {
  if (!req.user) {
    return res.status(401).json({ message: "Not authenticated" });
  }
  res.json({ id: req.user.id, email: req.user.email });
});

export default router;
