import React from "react";
import { FaList, FaTh } from "react-icons/fa";

const SearchBar = ({ searchTerm, setSearchTerm, view, setView }) => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      {/* Search Input */}
      <div className="flex-grow-1 me-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by country name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* View Toggle Buttons */}
      <div className="d-flex">
        <button
          className={`btn ${view === "list" ? "btn-primary" : "btn-outline-primary"} mx-1`}
          onClick={() => setView("list")}
        >
          <FaList />
        </button>
        <button
          className={`btn ${view === "card" ? "btn-primary" : "btn-outline-primary"} mx-1`}
          onClick={() => setView("card")}
        >
          <FaTh />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
