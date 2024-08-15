import React, { useState } from "react";
import "../css/global.css";
import "../css/nav.css";

export const Nav = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className="nav-container">
      <div className="nav-titulo">
        <h1>Smartphone Technology</h1>

        <div className="nav-actions">
          <input
            type="search"
            placeholder="Search devices..."
            aria-label="search-devices"
            className="nav-search"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button aria-label="Filter devices" className="nav-button">
            Filters
          </button>
        </div>
      </div>
    </div>
  );
};
