// src/components/CountryFlag.js
import React from 'react';

const CountryFlag = ({ selectedCountry }) => {
  return (
    <div className="col-md-5 mb-4">
      <div className="flag-container d-flex flex-column align-items-center">
        {selectedCountry ? (
          <img
            src={selectedCountry.flag}
            alt={selectedCountry.name}
            className="img-fluid border rounded-lg shadow flag-size"
          />
        ) : (
          <div className="border p-4 text-white" style={{ width: '200px', height: '130px' }}>
            <span>Select Country</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryFlag;
