import { useRef, useState } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import Sidebar from "./components/Sidebar";

const App = () => {
    const [todoList, setTodoList] = useState([
        { id: 1, name: "Đi học thêm", isImportant: false, isCompleted: true },
        { id: 2, name: "Đi bơi", isImportant: true, isCompleted: false },
        { id: 3, name: "Học piano", isImportant: false, isCompleted: false },
    ]);
    const [showSidebar, setShowSidebar] = useState(false);
    const [activeTodoItemId, showActiveTodoItemId] = useState();

    const inputRef = useRef();

    const activeTodoItem = todoList.find(
        (todo) => todo.id === activeTodoItemId
    );

    const handleCompletedCheckboxChange = (todoId) => {
        const newTodoList = todoList.map((todo) => {
            if (todo.id === todoId) {
                return { ...todo, isCompleted: !todo.isCompleted };
            }
            return todo;
        });
        setTodoList(newTodoList);
    };

    const handleTodoItemChange = (newTodo) => {
        const newTodoList = todoList.map((todo) => {
            if (todo.id === newTodo.id) {
                return newTodo;
            }
            return todo;
        });
        setTodoList(newTodoList);
    };

    const handleTodoItemClick = (todoId) => {
        setShowSidebar(true);
        showActiveTodoItemId(todoId);
    };

    const todos = todoList.map((todo) => {
        return (
            <TodoItem
                id={todo.id}
                key={todo.id}
                name={todo.name}
                isImportant={todo.isImportant}
                isCompleted={todo.isCompleted}
                handleCompletedCheckboxChange={handleCompletedCheckboxChange}
                handleTodoItemClick={handleTodoItemClick}
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
            {showSidebar && (
                <Sidebar
                    key={activeTodoItemId}
                    todoItem={activeTodoItem}
                    handleTodoItemChange={handleTodoItemChange}
                    setShowSidebar={setShowSidebar}
                />
            )}
        </div>
    );
};

export default App;
