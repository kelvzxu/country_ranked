// src/components/CountrySelector.js
import React from 'react';

const dataSelector = ({ index, selectedData, onSelectData, data }) => {
  return (
    <div className="col-md-5 mb-4">
      <select
        className="form-control mt-2"
        onChange={(e) => onSelectData(index, e.target.value)}
        value={selectedData ? selectedData.code : ""}
      >
        <option value="">Select data</option>
        {data.map((data) => (
          <option key={data.code} value={data.code}>
            {data.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default dataSelector;
