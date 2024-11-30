// src/pages/ComparePage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate to handle page navigation
import { useSelector } from 'react-redux'; // Assuming you have countries data in the Redux store
import Flag from '../components/Flag'; // Import CountryFlag component
import DataSelector from '../components/DataSelector'; // Import CountrySelector component

const ComparePage = () => {
  const navigate = useNavigate(); // Hook to navigate to different routes
  const countries = useSelector(state => state.countries.data); // Fetch all countries data
  const [selectedCountries, setSelectedCountries] = useState([null, null]); // State for storing selected countries

  const handleSelectCountry = (index, countryCode) => {
    setSelectedCountries(prevState => {
      const updatedCountries = [...prevState];
      updatedCountries[index] = countries.find(c => c.code === countryCode);
      return updatedCountries;
    });
  };

  const handleCompare = () => {
    // Navigate to the comparison page, passing the selected countries as state
    if (selectedCountries[0] && selectedCountries[1]) {
      navigate('/compare/result', { state: { countries: selectedCountries } });
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Compare Countries</h1>

      <div className="row justify-content-center">
        {/* First country (Flag) */}
        <Flag selectedCountry={selectedCountries[0]} />
        
        {/* Second country (Flag) */}
        <Flag selectedCountry={selectedCountries[1]} />
      </div>

      <div className="row justify-content-center">
        {/* First country (Dropdown) */}
        <DataSelector
          index={0}
          selectedData={selectedCountries[0]}
          onSelectData={handleSelectCountry}
          data={countries}
        />
        
        {/* Second country (Dropdown) */}
        <DataSelector
          index={1}
          selectedData={selectedCountries[1]}
          onSelectData={handleSelectCountry}
          data={countries}
        />
      </div>

      {/* Compare button */}
      <div className="text-center">
        <button
          className="btn btn-lg btn-success"
          onClick={handleCompare}
          disabled={!selectedCountries[0] || !selectedCountries[1]}
          style={{
            padding: '10px 20px',
            borderRadius: '50px',
            fontSize: '18px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)'
          }}
        >
          Compare Now
        </button>
      </div>
    </div>
  );
};

export default ComparePage;
