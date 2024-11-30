import React from "react";
import { Link } from "react-router-dom";

// Utility function to format population
const formatPopulation = (num) => {
    if (num >= 1_000_000_000) {
      return (num / 1_000_000_000).toFixed(1) + "B"; // Format in billions
    } else if (num >= 1_000_000) {
      return (num / 1_000_000).toFixed(1) + "M"; // Format in millions
    }
    return num.toLocaleString(); // Default for smaller numbers
  };

const CountryTable = ({ data, handleSort, sortConfig }) => {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover align-middle">
        <thead className="table-dark">
          <tr>
            <th scope="col" onClick={() => handleSort("name")}>
              Country {sortConfig.key === "name" ? (sortConfig.direction === "asc" ? "↑" : "↓") : ""}
            </th>
            <th scope="col" onClick={() => handleSort("region")}>
              Region {sortConfig.key === "region" ? (sortConfig.direction === "asc" ? "↑" : "↓") : ""}
            </th>
            <th scope="col" onClick={() => handleSort("population")}>
              Population {sortConfig.key === "population" ? (sortConfig.direction === "asc" ? "↑" : "↓") : ""}
            </th>
            <th scope="col" onClick={() => handleSort("code")}>
              Code {sortConfig.key === "code" ? (sortConfig.direction === "asc" ? "↑" : "↓") : ""}
            </th>
            <th scope="col">Flag</th>
          </tr>
        </thead>
        <tbody>
          {data.map((country, index) => (
            <tr key={index}>
              <td>
                <Link to={`/country/${country.name}`} className="text-decoration-none text-primary">
                  {country.name}
                </Link>
              </td>
              <td>{country.region}</td>
              <td>{country.population.toLocaleString()}</td>
              <td>{country.code}</td>
              <td>
                <img
                  src={country.flag}
                  alt={`${country.name} flag`}
                  className="img-thumbnail"
                  style={{ width: "50px" }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CountryTable;
