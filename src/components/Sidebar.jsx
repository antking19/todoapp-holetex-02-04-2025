import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <form className="sb-form">
                <div className="sb-form-field">
                    <label htmlFor="sb-name">Todo Name</label>
                    <input type="text" name="name" id="sb-name" />
                </div>
                <div className="sb-form-field">
                    <label htmlFor="sb-important">Is Important?</label>
                    <input
                        type="checkbox"
                        name="isImportant"
                        id="sb-important"
                    />
                </div>
                <div className="sb-form-field">
                    <label htmlFor="sb-completed">Is Completed?</label>
                    <input type="checkbox" name="completed" id="sb-completed" />
                </div>
            </form>
            <div className="sb-footer">
                <button>Save</button>
                <button>Cancel</button>
            </div>
        </div>
    );
};

export default Sidebar;
