
import './App.css'

import { useState } from "react";

function App()  {
    const [items, setItems] = useState([
        { id: 1, name: "mango", bought: true },
        { id: 2, name: "potato", bought: true },
        { id: 3, name: "banana", bought: false },
        { id: 4, name: "pineapple", bought: false }
    ]);
    const [newItem, setNewItem] = useState("");
    const [editingItem, setEditingItem] = useState(null);
    const [editText, setEditText] = useState("");

    const addItem = () => {
        if (newItem.trim() === "") return;
        setItems([...items, { id: Date.now(), name: newItem, bought: false }]);
        setNewItem("");
    };

    const toggleBought = (id) => {
        setItems(
            items.map((item) =>
                item.id === id ? { ...item, bought: !item.bought } : item
            )
        );
    };

    const removeItem = (id) => {
        setItems(items.filter((item) => item.id !== id));
    };

    const startEditing = (id, name) => {
        setEditingItem(id);
        setEditText(name);
    };

    const saveEdit = (id) => {
        setItems(items.map((item) => (item.id === id ? { ...item, name: editText } : item)));
        setEditingItem(null);
    };

    return (
        <div className="container">
            <h1>Shopping List</h1>
            <div className="input-container">
                <input
                    type="text"
                    id = "item"
                    placeholder="Add a new item"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                />
                <button onClick={addItem}>Add</button>
            </div>
            <ul>
                {items.map((item) => (
                    <li
                        key={item.id}
                        className={item.bought ? "bought" : ""}
                        onClick={() => toggleBought(item.id)}
                    >
                        {editingItem === item.id ? (
                            <>
                                <input
                                    type="text"
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                />
                                <button onClick={() => saveEdit(item.id)}>Save</button>
                            </>
                        ) : (
                            <>
                                {item.name}
                                <button className="edit" onClick={(e) => { e.stopPropagation(); startEditing(item.id, item.name); }}>Edit</button>
                                <button className="remove" onClick={(e) => { e.stopPropagation(); removeItem(item.id); }}>Remove</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default App;
