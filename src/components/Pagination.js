import React from "react";
import { FaChevronLeft, FaChevronRight, FaList, FaTh } from "react-icons/fa";

const Pagination = ({
  currentPage,
  pageCount,
  handlePreviousClick,
  handleNextClick,
  view,
  setView,
}) => {
  return (
    <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
      {/* Page Navigation */}
      <div className="btn-group">
        <button
          className="btn btn-primary"
          onClick={handlePreviousClick}
          disabled={currentPage === 0}
        >
          <FaChevronLeft />
        </button>
        <button
          className="btn btn-primary"
          onClick={handleNextClick}
          disabled={currentPage + 1 === pageCount}
        >
          <FaChevronRight />
        </button>
      </div>

      {/* View Toggle */}
      <div className="btn-group">
        <button
          className={`btn ${view === "list" ? "btn-primary" : "btn-outline-primary"}`}
          onClick={() => setView("list")}
        >
          <FaList />
        </button>
        <button
          className={`btn ${view === "card" ? "btn-primary" : "btn-outline-primary"}`}
          onClick={() => setView("card")}
        >
          <FaTh />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
