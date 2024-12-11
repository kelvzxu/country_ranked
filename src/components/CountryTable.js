import React from "react";
import { useNavigate } from "react-router-dom";

const CountryTable = ({ data, handleSort, sortConfig }) => {

  const navigate = useNavigate();

  const handleRowClick = (countryName) => {
    navigate(`/country/${countryName}`);
  };

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
            <tr
              key={index}
              style={{ cursor: 'pointer' }}
              onClick={() => handleRowClick(country.name)}  
            >
              <td>{country.name}</td>
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
