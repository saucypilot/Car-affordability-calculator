'use client';

import React, { useState } from 'react';
import Questions from './questions';
import Results from './results';
import styles from '../styles/calculator.module.css';

function Calculator() {
  const [results, setResults] = useState({ monthlyPayment: 0 });

  return (
    <div className={styles.divCalculator}>
      <Questions updateResults={setResults} />
      <Results {...results} />
    </div>
  );
}

export default Calculator;
