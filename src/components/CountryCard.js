import React from "react";
import { Link } from "react-router-dom";

const CountryCard = ({ data }) => {
  return (
    <div className="row">
      {data.map((country, index) => (
        <div key={index} className="col-md-4 mb-4">
          <div className="card shadow-sm border-light rounded-3">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="card-title mb-0">{country.name}</h5>
              {/* Flag in the badge */}
              <span className="d-flex align-items-center">
                <img
                  src={country.flag}
                  alt={`${country.name} flag`}
                  style={{
                    width: "30px",
                    height: "20px",
                    objectFit: "cover",
                    marginRight: "5px",
                  }}
                />
              </span>
            </div>
            <div className="card-body">
              {/* Symbol on the left */}
              <div className="d-flex align-items-center">
                {country.symbol && (
                  <img
                    src={country.symbol.png}
                    alt={`${country.name} symbol`}
                    style={{
                      width: "50px", // Adjust size as needed
                      height: "50px",
                      marginRight: "10px", // Space between symbol and text
                    }}
                  />
                )}

                {/* Country details on the right */}
                <div>
                  <p className="card-text">
                    <strong>Region:</strong> {country.region}
                  </p>
                  <p className="card-text">
                    <strong>Code:</strong> {country.code}
                  </p>
                  <p className="card-text">
                    <strong>Population:</strong> {country.population.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
            <div className="card-footer text-end">
              <Link to={`/country/${country.name}`} className="btn btn-sm btn-outline-primary">
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountryCard;
