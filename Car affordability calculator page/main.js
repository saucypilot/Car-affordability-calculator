import { initializeDollarInputs } from './addDollarSign.js';
import { initializeInputSanitizer } from './inputSanitizer.js';
import { handleCalculation } from './calculateLoan.js';

document.addEventListener('DOMContentLoaded', () => {
  initializeDollarInputs();
  initializeInputSanitizer();

  const calculateButton = document.querySelector('#calculate-button');
  calculateButton.addEventListener('click', handleCalculation);
});
