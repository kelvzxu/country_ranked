import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries } from "../store/countrySlice";
import SearchBar from "../components/SearchBar";
import CountryTable from "../components/CountryTable";
import CountryCard from "../components/CountryCard";
import Pagination from "../components/Pagination";

const HomePage = () => {
  const dispatch = useDispatch();
  const { data: countries, loading, error } = useSelector((state) => state.countries);

  const [view, setView] = useState("list");
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const itemsPerPage = 10;

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mt-5">
      
      <div className="row mb-4">
        <div className="col-md-8">
          <h6 className="display-4">Countries Ranked by Population</h6>
        </div>
        <div className="col-md-4 text-md-end">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} view={view} setView={setView} />
        </div>
      </div>
      {view === "list" ? (
        <CountryTable data={currentPageData} handleSort={handleSort} sortConfig={sortConfig} />
      ) : (
        <CountryCard data={currentPageData} />
      )}
      <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
    </div>
  );
};

export default HomePage;
