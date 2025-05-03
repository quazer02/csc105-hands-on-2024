
import axios from "axios";

const Axios = axios.create({
    // backend URL
    baseURL: "http://localhost:8000/todo",
})

const getTodo = async () => {
    try {
        const res = await Axios.get(`/getTodo`)
        console.log(res.data.todos)

        return res.data.todos
    }
    catch (error) {
        console.log(error);
    }
}

const addTodo = async (name) => {
    try {
        console.log(name)
        const res = await Axios.post(`/addTodo`, {
            name : name,
        });
        return res.data.todos

    }
    catch (error) {
        console.log(error);
        return {
            success: false,
            data: [],
        }
    }
}

const editTodo = async (id, newName) => {
    try {
        const res = await Axios.patch(`/editTodo`, {
            id: id,
            name : newName
        });
        return {
            success: true,
            data: res.data,
        }
    }
    catch (error) {
        console.log(error);
        return {
            success: false,
            data: [],
        }
    }
}

const completeTodo = async (id) => {
    try {
        await Axios.patch(`/completeTodo?id=${id}`)
    }
    catch (error) {
        console.log(error);
        return {
            success: false,
            data: [],
        }
    }
}

const deleteTodo = async (id) => {
    try {
        await Axios.delete(`/deleteTodo?id=${id}`)
    }
    catch (error) {
        console.log(error);
        return {
            success: false,
            data: [],
        }
    }
}

export { getTodo, addTodo, editTodo, completeTodo, deleteTodo };
