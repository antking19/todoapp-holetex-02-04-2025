import { useRef, useState } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";

const App = () => {
    const [todoList, setTodoList] = useState([
        { id: 1, name: "Đi học thêm" },
        { id: 2, name: "Đi bơi" },
        { id: 3, name: "Học piano" },
    ]);

    const inputRef = useRef();

    const todos = todoList.map((todo) => {
        return <TodoItem key={todo.id} name={todo.name} />;
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
                        setTodoList([
                            ...todoList,
                            {
                                id: crypto.randomUUID(),
                                name: value,
                            },
                        ]);
                        inputRef.current.value = "";
                    }
                }}
            />
            <div>{todos}</div>
        </div>
    );
};

export default App;
