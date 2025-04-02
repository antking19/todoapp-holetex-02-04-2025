import { useRef, useState } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";

function App() {
    const [todoList, setTodoList] = useState([
        { id: 1, name: "Đi học thêm", isImportant: false },
        { id: 2, name: "Đi học võ", isImportant: true },
        { id: 3, name: "Đi ngủ", isImportant: false },
    ]);

    const inputRef = useRef();
    console.log({ inputRef });

    const todos = todoList.map((todo) => {
        return (
            <TodoItem
                name={todo.name}
                key={todo.id}
                isImportant={todo.isImportant}
            />
        );
    });

    return (
        <div className="container">
            <input
                ref={inputRef}
                type="text"
                name="add-new-task"
                placeholder="Add new task"
                className="task-input"
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        const value = e.target.value;
                        // console.log(value);
                        setTodoList([
                            ...todoList,
                            { id: crypto.randomUUID(), name: value },
                        ]);
                        inputRef.current.value = "";
                    }
                }}
            />
            <div>{todos}</div>
        </div>
    );
}

export default App;
