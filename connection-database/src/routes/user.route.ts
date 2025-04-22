import { Hono } from "hono";
// @ts-ignore
import * as userController from "../controllers/user.controller.ts";

const userRouter = new Hono();

userRouter.post("/", userController.createUser);
userRouter.patch("/", userController.updateUser);
userRouter.get("/", userController.allUser)
export { userRouter };