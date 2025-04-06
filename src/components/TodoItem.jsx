import React from "react";

const TodoItem = (props) => {
    return (
        <div className="todo-item">
            <div style={{ display: "flex", gap: 4 }}>
                <input
                    type="checkbox"
                    checked={props.isCompleted}
                    onChange={() => {
                        props.handleCompletedCheckboxChange(props.id);
                    }}
                />
                <p className="todo-item-text">{props.name}</p>
            </div>
            {props.isImportant && <p>⭐</p>}
        </div>
    );
};

export default TodoItem;
