import React, { useState } from 'react';
import Questions from './questions.client';
import Results from './results.client';

function Calculator() {
  const [results, setResults] = useState({ monthlyPayment: 0 });

  return (
    <div>
      <Questions updateResults={setResults} />
      <Results {...results} />
    </div>
  );
}

export default Calculator;
