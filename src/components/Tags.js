import React from "react";
import { NavLink } from "react-router-dom";

function Tags() {
  return (
    <div className="app__tags-container">
      <ul className="app__tags-list">
        <NavLink className="app__tags-list-item" to="/summer">
          <li>Summer</li>
        </NavLink>
        <NavLink className="app__tags-list-item" to="/mountain">
          <li>Mountain</li>
        </NavLink>
        <NavLink className="app__tags-list-item" to="/leave">
          <li>Leave </li>
        </NavLink>
      </ul>
    </div>
  );
}

export default Tags;
