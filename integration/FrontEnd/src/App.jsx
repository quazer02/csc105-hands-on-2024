import { useState, useEffect} from "react";
import * as api from "./api.jsx";

function App()  {
    const [todo, setTodo] = useState([]);
    const [name, setName] = useState("");
    const [editText, setEditText] = useState("");
    const [editingItem, setEditingItem] = useState(null);


    const getTodo = async () => {
        const response = await api.getTodo();
        setTodo(response)

    }

    const AddTodo = async (name) => {
        await api.addTodo(name);
        getTodo()
        setName('')
    }

    useEffect (() => {
        getTodo()
    },[])

    const handleDelete = async(id) => {
        await api.deleteTodo(id);
        getTodo()
    }
    const handleEdit = async (id, EditName) => {
        await  api.editTodo(id, EditName)
        Edit(null, null)
        getTodo()

    }
    const Edit = async (id, currentName ) => {
        setEditingItem(id);
        setEditText(currentName);
        getTodo()

    }
    const Done = async (id) => {
        await api.completeTodo(id);
        getTodo()
    }

    return (
        <div className = "flex flex-col justify-center items-center min-h-screen " >
            <div className= " bg-amber-100 p-20">
                <h1 className="flex justify-center">Name List</h1>
                <div >
                    <div className ="flex flex-row justify-space-between space-x-3" >
                        <h1 className= "mt-2">name:</h1>
                        <input
                            className="border border-gray-300 rounded-md p-2"
                            id="name"
                            value={name}
                            placeholder="Name"
                            onChange={e => setName(e.target.value)}
                        />
                        <button className = "bg-green-400 px-2 rounded-md " onClick={() => AddTodo(name)}>Add</button>
                    </div>
                </div>
                <ul className = "flex flex-col justify-space-between space-x-3" >
                    {todo.map((item) => (
                        <li  key={item.id}>
                            {editingItem === item.id ? (
                                <>
                                    <div className ="flex flex-col justify-center space-x-5">
                                        <input
                                            className="p-2 bg-amber-50 rounded-md"
                                            id = "editText"
                                            value={editText}
                                            placeholder = "New name"
                                            onChange={(e) => setEditText(e.target.value)}
                                        />
                                        <div className ="flex justify-end space-x-4">
                                            <button className="bg-green-400 px-2 rounded-md" onClick={() => handleEdit(item.id, editText)}>Save</button>
                                        </div>
                                    </div>
                                </>
                            ) : (
                            <div className="flex flex-col justify-center space-x-5" >
                                <p className="p-2 bg-amber-50 rounded-md">{item.id} | Name: {item.name} | completed: {item.success ? "Yes" : "No"}</p>
                                <div className="flex justify-end space-x-4">
                                    <button className="bg-green-400 px-2 rounded-md" onClick={() => Done(item.id)}>Done</button>
                                    <button className={"bg-blue-300 px-2 rounded-md"}
                                            onClick={() => {Edit(item.id, item.name)}}
                                    >
                                        EDIT
                                    </button>
                                    <button className={"bg-red-300 px-2 rounded-md"}
                                            onClick={() => {handleDelete(item.id)}}
                                    >
                                        DELETE
                                    </button>
                                </div>
                            </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
export default App;