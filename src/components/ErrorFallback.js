import React from "react";
import { FaExclamationTriangle } from "react-icons/fa"; // Icon for the error message
import "./styles/ErrorFallback.css";

const ErrorFallback = ({ errorMessage, onRetry }) => {
  return (
    <div className="error-fallback">
      <FaExclamationTriangle className="icon" />
      <p>{errorMessage || "Something went wrong. Please try again."}</p>
      <button onClick={onRetry} className="btn">
        Retry
      </button>
    </div>
  );
};

export default ErrorFallback;
