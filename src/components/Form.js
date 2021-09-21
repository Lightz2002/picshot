import React from "react";
import { FaSearch } from "react-icons/fa";

function Form({ search, handleSubmit, handleChange }) {
  return (
    <form onSubmit={handleSubmit} className="app__form">
      <div className="app__form-container">
        <input
          value={search}
          onChange={handleChange}
          type="text"
          className="app__form-input"
          placeholder="Search"
        />
        <button className="app__form-search">
          <FaSearch />
        </button>
      </div>
    </form>
  );
}

export default Form;
