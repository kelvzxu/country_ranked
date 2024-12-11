
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Flag from '../components/Flag';
import DataSelector from '../components/DataSelector';
import ControlPanel from "../components/ControlPanel";
import Footer from '../components/Footer';
import './styles/ComparePage.css';

const ComparePage = () => {
  const navigate = useNavigate();
  const countries = useSelector(state => state.countries.data);
  console.log(countries);
  const [selectedCountries, setSelectedCountries] = useState([null, null]);

  const handleSelectCountry = (index, countryCode) => {
    setSelectedCountries(prevState => {
      const updatedCountries = [...prevState];
      updatedCountries[index] = countries.find(c => c.code === countryCode);
      return updatedCountries;
    });
  };

  const handleCompare = () => {
  
    if (selectedCountries[0] && selectedCountries[1]) {
      navigate('/compare/result', { state: { countries: selectedCountries } });
    }
  };

  return (
    <div className="container-fluit">
      <ControlPanel title="Compare Country" />
      <div className="o_content word-background">
        <div className="compare-component">
          <div className="row justify-content-center">
            <Flag selectedCountry={selectedCountries[0]} />
            <Flag selectedCountry={selectedCountries[1]} />
          </div>
          <div className="row justify-content-center">
            <DataSelector
              index={0}
              selectedData={selectedCountries[0]}
              onSelectData={handleSelectCountry}
              data={countries}
            />
            <DataSelector
              index={1}
              selectedData={selectedCountries[1]}
              onSelectData={handleSelectCountry}
              data={countries}
            />
          </div>
          <div className="text-center">
            <button
              className="btn btn-lg btn-success"
              onClick={handleCompare}
              disabled={!selectedCountries[0] || !selectedCountries[1]}
              style={{
                padding: "10px 20px",
                borderRadius: "50px",
                fontSize: "18px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              Compare Now
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ComparePage;
