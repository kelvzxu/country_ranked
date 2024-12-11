import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries } from "../store/countrySlice";
import CountryTable from "../components/CountryTable";
import CountryCard from "../components/CountryCard";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorFallback from "../components/ErrorFallback";
import ControlPanel from "../components/ControlPanel";
import Footer from '../components/Footer';

const HomePage = () => {
  const dispatch = useDispatch();
  const { data: countries, loading, error } = useSelector((state) => state.countries);

  const [view, setView] = useState("list");
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [selectedRegion, setSelectedRegion] = useState("");

  const itemsPerPage = 15;

  const handleResize = useCallback(() => {
    if (window.innerWidth <= 768) {
      setView("kanban");
    } else {
      setView("list");
    }
  }, []);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  useEffect(() => {
    setCurrentPage(0);
  }, [searchTerm, selectedRegion]);

  
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const regions = [...new Set(countries.map((country) => country.region).filter(Boolean))];

  const filteredCountries = countries.filter((country) => {
    const matchesSearchTerm = country.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = selectedRegion ? country.region === selectedRegion : true;
    return matchesSearchTerm && matchesRegion;
  });

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
      <ControlPanel
        title="Countries Ranked by Population"
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        regions={regions}
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
        currentPage={currentPage}
        pageCount={pageCount}
        handlePreviousClick={handlePreviousClick}
        handleNextClick={handleNextClick}
        view={view}
        setView={setView}
        showSearchAndPagination
      />

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
      <Footer />
    </div>
  );
};

export default HomePage;
