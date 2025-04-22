import { Hono } from "hono";
// @ts-ignore
import * as todoController from "../controllers/todo.controller.ts";

const todoRouter = new Hono();
todoRouter.post("/", todoController.createTodo);
todoRouter.patch("/", todoController.updateTodo);
todoRouter.patch("/update", todoController.complete);
todoRouter.get("/", todoController.getTodo);
todoRouter.get("/byID", todoController.getAllTodo);
todoRouter.delete("/", todoController.deleteTodo)

export { todoRouter };