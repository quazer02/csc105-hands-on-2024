import type { Context } from "hono";
import * as todoModel from "../model/todo.model.ts";

type newToDo = {
    name: string,
    status: false,
}
type edit = {
    id : number,
    name: string,
}
type complete = {
    id: number,
}
const GetTodo = async (c: Context) => {
  try {
      const data = await todoModel.GetTodo();
      return c.json({
          todos: data
      }, 200);
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error : ${e}`,
      },
      500
    );
  }
};

const AddTodo = async (c: Context) => {
  try {
      const body = await c.req.json<newToDo>();
      if (!body.name)
          return c.json(
              {
                  success: false,
                  data: null,
                  msg: "Missing required fields",
              },
              400
          );
      const newTodo = await todoModel.AddTodo(body.name);
      return c.json({
              success: true,
              data: newTodo,
              msg: "Created new Todo!",
          },
          200
      );
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error : ${e}`,
      },
      500
    );
  }
};

const EditTodoName = async (c: Context) => {
  try {
      const body = await c.req.json<edit>();
      if (!body.name || !body.id)
          return c.json(
              {
                  success: false,
                  data: null,
                  msg: "Missing required fields",
              },
              400
          );
      const newTodo = await todoModel.EditTodo(body.id, body.name);
      return c.json({
          success: true,
          data: newTodo,
          msg: "Created new Todo!",
      });
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error : ${e}`,
      },
      500
    );
  }
};

const CompleteTodo = async (c: Context) => {
  try {
      const id = c.req.query("id");
      if (id) {
          const completed = todoModel.SuccessTodo(parseInt(id))
          return c.json(
              {
                  success: true,
                  id: id,
                  completedTodo: completed,
              }
          );
      }
      return c.json({
          success: false,
          msg: "Missing required field",
      })
  } catch (e) {
      return c.json(
          {
              success: false,
              data: null,
              msg: `Internal Server Error : ${e}`,
          },
          500
    );
  }
};

const DeleteTodo = async (c: Context) => {
  try {
      const query = c.req.query("id");
      if (query !== undefined && query !== null) {
          const data = await todoModel.DeleteTodo(parseInt(query));
          return c.json(data, 200);
      }
      return c.json(
          {
              success: false,
              data: null,
              msg: "Missing required fields",
          },
          400
      );
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error : ${e}`,
      },
      500
    );
  }
};

export { GetTodo, AddTodo, EditTodoName, CompleteTodo, DeleteTodo };
