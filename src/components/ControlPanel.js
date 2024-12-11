import React from "react";
import SearchBar from "./SearchBar"; 
import Pagination from "./Pagination";
import "./styles/ControlPanel.css";

const ControlPanel = ({
  title,
  searchTerm,
  setSearchTerm,
  regions,
  selectedRegion,
  setSelectedRegion,
  currentPage,
  pageCount,
  handlePreviousClick,
  handleNextClick,
  view,
  setView,
  showSearchAndPagination = false,
}) => {
  return (
    <div className="o_control_panel d-flex flex-column gap-3 gap-lg-1 px-3 pt-2 pb-3">
      <div className="o_control_panel_main d-flex flex-wrap flex-lg-nowrap justify-content-between align-items-lg-start gap-3 flex-grow-1">
        <div className="o_control_panel_breadcrumbs d-flex align-items-center gap-1 order-0 h-lg-100">
          <div className="min-w-0 text-truncate">
            <h5>{title}</h5>
          </div>
        </div>
        {showSearchAndPagination && (
          <div className="o_control_panel_navigation d-flex flex-wrap flex-md-nowrap justify-content-end gap-3 gap-lg-1 gap-xl-3 order-1 order-lg-2 flex-grow-1">
            <SearchBar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              regions={regions}
              selectedRegion={selectedRegion}
              setSelectedRegion={setSelectedRegion}
            />
            <Pagination
              currentPage={currentPage}
              pageCount={pageCount}
              handlePreviousClick={handlePreviousClick}
              handleNextClick={handleNextClick}
              view={view}
              setView={setView}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ControlPanel;
