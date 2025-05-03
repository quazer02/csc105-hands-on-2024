import { Hono } from "hono";

const todoRouter = new Hono();
import * as todoController from "../controller/todo.controller.js"


todoRouter.patch("/editTodo", todoController.EditTodoName)
todoRouter.get("/getTodo", todoController.GetTodo)
todoRouter.post("/addTodo", todoController.AddTodo)
todoRouter.patch("/completeTodo", todoController.CompleteTodo)
todoRouter.delete("/deleteTodo", todoController.DeleteTodo)
export { todoRouter };
