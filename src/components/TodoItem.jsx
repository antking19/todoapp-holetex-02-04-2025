import React from "react";

const TodoItem = (props) => {
    return (
        <div className="todo-item">
            <p className="todo-item-text">{props.name}</p>
            {props.isImportant && <p>⭐</p>}
        </div>
    );
};

export default TodoItem;
