import exp from 'constants';
import React from 'react';

function Questions() {
    return (
      <div>
        <div className="question">
          <label htmlFor="yearlyIncome">Yearly income:</label>
          <input className="dollar-input" id="yearlyIncome" placeholder="$" pattern="[0-9]*" required />
        </div>
        <div className="question">
          <label htmlFor="tradeIn">Trade in value:</label>
          <input className="dollar-input" id="tradeIn" placeholder="$" pattern="[0-9]*" required />
        </div>
        <div className="question">
          <label htmlFor="creditScore">Credit score:</label>
          <input id="creditScore" pattern="[0-9]*" required />
        </div>    
        <div className="question">
            <label htmlFor="loanTerm">Loan term:</label>
            <select id="loanTerm" required>
                <option value="36">36 months</option>
                <option value="48">48 months</option>
                <option value="60">60 months</option>
                <option value="72">72 months</option>
                <option value="84">84 months</option>
            </select>
        </div>

        <button type="submit">Calculate</button>
      </div>
    );
  }

export default Questions;