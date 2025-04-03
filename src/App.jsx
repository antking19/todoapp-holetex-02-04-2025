import { useRef, useState } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import Sidebar from "./components/Sidebar";

function App() {
    const [todoList, setTodoList] = useState([
        { id: 1, name: "Đi học thêm", isImportant: false, isCompleted: false },
        { id: 2, name: "Đi học võ", isImportant: true, isCompleted: false },
        { id: 3, name: "Đi ngủ", isImportant: false, isCompleted: true },
    ]);

    const handleCompletedCheckBoxChange = (todoId) => {
        const newTodoList = todoList.map((todo) => {
            if (todo.id === todoId) {
                return { ...todo, isCompleted: !todo.isCompleted };
            }
            return todo;
        });
        setTodoList(newTodoList);
    };

    const inputRef = useRef();
    console.log({ inputRef });

    const todos = todoList.map((todo) => {
        return (
            <TodoItem
                id={todo.id}
                name={todo.name}
                key={todo.id}
                isImportant={todo.isImportant}
                isCompleted={todo.isCompleted}
                handleCompletedCheckBoxChange={handleCompletedCheckBoxChange}
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
                            {
                                id: crypto.randomUUID(),
                                name: value,
                                isImportant: false,
                                isCompleted: false,
                            },
                        ]);
                        inputRef.current.value = "";
                    }
                }}
            />
            <div>{todos}</div>
            <Sidebar />
        </div>
    );
}

export default App;
