import React from "react";
import "./styles/LoadingSpinner.css";

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <div className="dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <p>Loading data, please wait...</p>
    </div>
  );
};

export default LoadingSpinner;
