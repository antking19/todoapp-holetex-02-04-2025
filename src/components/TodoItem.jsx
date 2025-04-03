import React from "react";

const TodoItem = (props) => {
    // console.log(props);

    return (
        <div
            className="todo-item"
            onClick={() => {
                props.handleTodoItemClick(props.id);
            }}
        >
            <div style={{ display: "flex", gap: "4px" }}>
                <input
                    type="checkbox"
                    checked={props.isCompleted}
                    onChange={() => {
                        props.handleCompletedCheckBoxChange(props.id);
                    }}
                />
                <p className="todo-item-text">{props.name}</p>
            </div>
            {props.isImportant && <p>⭐</p>}
        </div>
    );
};

export default TodoItem;
