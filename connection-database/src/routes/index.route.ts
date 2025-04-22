import { Hono } from "hono";
// @ts-ignore
import { userRouter } from "./user.route.ts";
// @ts-ignore
import { todoRouter } from "./todo.route.ts"; //-------->add this

const mainRouter = new Hono();

mainRouter.route("/users", userRouter);
mainRouter.route("/todos", todoRouter); //--------->add this

export { mainRouter };