import React, { useState } from "react";
import "./FilterPanel.css";

const FILTER_ITEMS = [
    {
        id: "all",
        label: "All",
        iconPath: "./public/inbox.png",
    },
    {
        id: "important",
        label: "Important",
        iconPath: "./public/flag.png",
    },
    {
        id: "completed",
        label: "Completed",
        iconPath: "./public/check.png",
    },
    {
        id: "delete",
        label: "Delete",
        iconPath: "./public/delete.png",
    },
];

const FilterPanel = () => {
    const [selectedFilterId, setSelectedFilterId] = useState("all");

    return (
        <div className="filter-panel">
            <input type="text" name="search-text" placeholder="Search" />
            <div className="filter-container">
                {FILTER_ITEMS.map((filterItem) => {
                    return (
                        <div
                            className={`filter-item ${
                                filterItem.id === selectedFilterId
                                    ? "selected"
                                    : ""
                            }`}
                            onClick={() => setSelectedFilterId(filterItem.id)}
                        >
                            <div className="filter-name">
                                <img src={filterItem.iconPath} />
                                <p>{filterItem.label}</p>
                            </div>
                            <p>22</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FilterPanel;
