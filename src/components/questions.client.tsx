import React, { FormEvent, ChangeEvent, useState } from 'react';

function Questions({ updateResults }: { updateResults: (results: any) => void }) {
  const [carCost, setCarCost] = useState('');
  const [yearlyIncome, setYearlyIncome] = useState('');
  const [tradeIn, setTradeIn] = useState('');
  const [downPayment, setDownPayment] = useState('');
  const [creditScore, setCreditScore] = useState('');
  const [loanTerm, setLoanTerm] = useState('');

  const handleInputChange = (setter: (value: string) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setter(value);
  }; 

  const calculateResults = () => {
    // Parse all values as integers
    const parsedValues = [carCost, yearlyIncome, tradeIn, downPayment, creditScore, loanTerm].map(x => parseInt(x));
    const [parsedCarCost, parsedYearlyIncome, parsedTradeIn, parsedDownPayment, parsedCreditScore, parsedLoanTerm] = parsedValues;
    
    let interestRate = 0;
    if (parsedCreditScore >= 800) {
      interestRate = 0.04;
    } else if (parsedCreditScore >= 740) {
      interestRate = 0.07;
    } // Additional conditions for other ranges

    const monthlyPayment = parsedCarCost * (interestRate / 12) / (1 - Math.pow(1 + interestRate / 12, -parsedLoanTerm));

    // Update the Results component via a function passed down from parent
    updateResults({
      monthlyPayment: monthlyPayment.toFixed(2),
      // Other results to be calculated and passed
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!carCost || !yearlyIncome || !tradeIn || !downPayment || !creditScore || !loanTerm) {
      alert("Please fill all fields");
      return;
    }
    calculateResults();
  };

  return (
    <form onSubmit={handleSubmit} id='question-wrapper'>
      <div>
        <label htmlFor="carCost">Car Cost</label>
        <input type="text" name="carCost" value={carCost} onChange={handleInputChange(setCarCost)} />
      </div>
      <div>
        <label htmlFor="yearlyIncome">Yearly Income</label>
        <input type="text" name="yearlyIncome" value={yearlyIncome} onChange={handleInputChange(setYearlyIncome)} />
      </div>
      <div>
        <label htmlFor="tradeIn">Trade In</label>
        <input type="text" name="tradeIn" value={tradeIn} onChange={handleInputChange(setTradeIn)} />
      </div>
      <div>
        <label htmlFor="downPayment">Down Payment</label>
        <input type="text" name="downPayment" value={downPayment} onChange={handleInputChange(setDownPayment)} />
      </div>
      <div>
        <label htmlFor="creditScore">Credit Score</label>
        <input type="text" name="creditScore" value={creditScore} onChange={handleInputChange(setCreditScore)} />
      </div>
      <div>
        <label htmlFor="loanTerm">Loan Term</label>
        <input type="text" name="loanTerm" value={loanTerm} onChange={handleInputChange(setLoanTerm)} />
      </div>
      <button type="submit">Calculate</button>
    </form>
  );
}

export default Questions;
