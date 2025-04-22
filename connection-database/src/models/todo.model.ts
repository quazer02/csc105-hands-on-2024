// @ts-ignore
import { db } from "../index.ts";

const createTodo = async (title: string, userId: number) => {
    const todo = await db.todo.create({
        data: {
            title: title,
            userId: userId,
        },
    });
    return todo;
}
const updateTodo = async (id: number, title: string, userId: number) => {
    const todo = await db.todo.update({
        where: {
            id: id,
            userId: userId,
        },
        data:{
            title: title,
        },
    });
    return todo;
}
const getTodo = async (id: number) => {
    const todo = await db.todo.findUnique({
        where: {
            id: id,
        },
        include: {
            user: true,
        },
    });
    return todo;
}
const getAllTodo = async (id: number) => {
    const todo = await db.todo.findMany({
        where: {
            userId: id
        }
    });
    return todo;
}
const deleteTodo = async (id: number) => {
    const todo = await db.todo.delete({
        where: {
            id: id,
        },
    });
    return todo;
}
const complete = async (id: number) => {
    const todo = await db.todo.update({
        where: {
            id: id,
        },
        data: {
            completed: true,
        }
    });
    return todo;
}
export { createTodo , updateTodo , getTodo , complete , getAllTodo , deleteTodo};