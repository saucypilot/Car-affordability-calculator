import React from "react";

// Define an interface for the component's props
interface ResultsProps {
  monthlyPayment: number; // Assuming monthlyPayment is a number. Adjust the type as necessary.
}
function Results({ monthlyPayment}: ResultsProps) {
  return (
    <div>
      <div className="result">
        <label htmlFor="monthlyPayment">Monthly payment:</label>
        <output id="monthlyPayment">{monthlyPayment}</output>
      </div>
      {/* More results displayed similarly */}
    </div>
  );
}

export default Results;
