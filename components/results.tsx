import React from "react";

function Results() {
  return (
    <div>
      <div className="result">
        <label htmlFor="monthlyPayment">Monthly payment:</label>
        <output id="monthlyPayment"></output>
      </div>
      <div className="result">
        <label htmlFor="totalInterest">Total interest:</label>
        <output id="totalInterest"></output>
      </div>
      <div className="result">
        <label htmlFor="totalCost">Total cost:</label>
        <output id="totalCost"></output>
      </div>
    </div>
  );
}

export default Results;