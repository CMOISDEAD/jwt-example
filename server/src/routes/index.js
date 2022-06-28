import { Router } from "express";
import {
  registerController,
  loginController,
  deleteController,
  usersController,
} from "./controllers/auth.controller";

const router = Router();

router.get("/", (req, res) => {
  res.send("Server listen on port 8080");
});

router.post("/register", registerController);

router.post("/login", loginController);

router.delete("/delete", deleteController);

router.get("/users", usersController);

export default router;
