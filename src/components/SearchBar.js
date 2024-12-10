import React, { useState, useEffect, useRef } from "react";
import { FaFilter} from "react-icons/fa";

const SearchBar = ({
  searchTerm,
  setSearchTerm,
  view,
  setView,
  regions,
  selectedRegion,
  setSelectedRegion,
}) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="d-flex align-items-center gap-3">
      {/* Filter Button with Dropdown */}
      <div className="btn-group" ref={dropdownRef}>
        <button
          className="btn btn-primary dropdown-toggle"
          type="button"
          onClick={toggleDropdown}
        >
          <FaFilter /> Filter
        </button>
        {isDropdownOpen && (
          <div className="dropdown-menu show">
            <button
              className="dropdown-item"
              onClick={() => {
                setSelectedRegion("");
                setDropdownOpen(false); // Close dropdown
              }}
            >
              All Regions
            </button>
            {regions.map((region, index) => (
              <button
                key={index}
                className={`dropdown-item ${
                  selectedRegion === region ? "active" : ""
                }`}
                onClick={() => {
                  setSelectedRegion(region);
                  setDropdownOpen(false); // Close dropdown
                }}
              >
                {region}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Search Input */}
      <div className="flex-grow-1">
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

    </div>
  );
};

export default SearchBar;
