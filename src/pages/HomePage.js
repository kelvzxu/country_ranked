import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries } from "../store/countrySlice";
import SearchBar from "../components/SearchBar";
import CountryTable from "../components/CountryTable";
import CountryCard from "../components/CountryCard";
import Pagination from "../components/Pagination";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorFallback from "../components/ErrorFallback";

const HomePage = () => {
  const dispatch = useDispatch();
  const { data: countries, loading, error } = useSelector((state) => state.countries);

  const [view, setView] = useState("list");
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [selectedRegion, setSelectedRegion] = useState("");

  const itemsPerPage = 50;

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth <= 768) {
  //       setView("kanban"); 
  //       setView("list"); 
  //     }
  //   };

  //   // Initial check
  //   handleResize();

  //   window.addEventListener("resize", handleResize);

  //   return () => window.removeEventListener("resize", handleResize);
  // }, []); 
  
  // Get unique regions
  const regions = [...new Set(countries.map((country) => country.region).filter(Boolean))];

  // Filter countries
  const filteredCountries = countries.filter((country) => {
    const matchesSearchTerm = country.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = selectedRegion ? country.region === selectedRegion : true;
    return matchesSearchTerm && matchesRegion;
  });

  // Sort countries
  const sortedCountries = [...filteredCountries].sort((a, b) => {
    if (!sortConfig.key) return 0;
    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];
    if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
    if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  const offset = currentPage * itemsPerPage;
  const currentPageData = sortedCountries.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(sortedCountries.length / itemsPerPage);

  const handleRetry = () => {
    dispatch(fetchCountries());
  };

  const handlePreviousClick = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const handleNextClick = () => {
    setCurrentPage((prev) => Math.min(prev + 1, pageCount - 1));
  };

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorFallback errorMessage={error} onRetry={handleRetry} />;

  return (
    <div className="container-fluit">
      {/* Header */}
      <div className="o_control_panel d-flex flex-column gap-3 gap-lg-1 px-3 pt-2 pb-3">
        <div className="o_control_panel_main d-flex flex-wrap flex-lg-nowrap justify-content-between align-items-lg-start gap-3 flex-grow-1">
          <div className="o_control_panel_breadcrumbs d-flex align-items-center gap-1 order-0 h-lg-100">
            <div className="min-w-0 text-truncate">
              <h5>Countries Ranked by Population</h5>
            </div>
          </div>
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
        </div>
      </div>

      {/* Content */}
      {view === "list" ? (
        <CountryTable
          data={currentPageData}
          handleSort={handleSort}
          sortConfig={sortConfig}
        />
      ) : (
        <CountryCard data={currentPageData} />
      )}
    </div>
  );
};

export default HomePage;
