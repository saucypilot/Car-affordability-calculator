// Export the variables to the CAC-Display-elements.js file
export { twentyPercentOfIncome, creditScoreRange, interestRate, monthlyPayment, isMonthlyPaymentInRange };

// Get the values from the input fields when user clicks on the "Calculate" button
document.getElementById("calculate").onclick = function () {
  // Get the values from the input fields
  var carCost = document.getElementById("carCost").value;
  var yearlyIncome = document.getElementById("yearlyIncome").value;
  var tradeIn = document.getElementById("tradeIn").value;
  var downPayment = document.getElementById("downPayment").value;
  var creditScore = document.getElementById("creditScore").value;
  var loanTerm = document.getElementById("loanTerm").value;

  if (carCost === "" || yearlyIncome === "" || tradeIn === "" || downPayment === "" || creditScore === "" || loanTerm === "") {
    alert("Please enter all the answers for each question.");
    return;
  }

  // Remove any non-numeric characters from the input values
  carCost = carCost.replace(/[^0-9]/g, "");
  yearlyIncome = yearlyIncome.replace(/[^0-9]/g, "");
  tradeIn = tradeIn.replace(/[^0-9]/g, "");
  downPayment = downPayment.replace(/[^0-9]/g, "");
  creditScore = creditScore.replace(/[^0-9]/g, "");
  loanTerm = loanTerm.replace(/[^0-9]/g, "");

  // Convert the input values to integers
  carCost = parseInt(carCost);
  yearlyIncome = parseInt(yearlyIncome);
  tradeIn = parseInt(tradeIn);
  downPayment = parseInt(downPayment);
  creditScore = parseInt(creditScore);
  loanTerm = parseInt(loanTerm);

  // Automatically assign zero to downPayment if it is empty
  if (downPayment == "") {
    downPayment = 0;
  }

  // Calculate 20% on yearly income
  var twentyPercentOfIncome = yearlyIncome * 0.2;

  // Calculate the total cost of the car  
  carCost = carCost - tradeIn - downPayment;

  // Calculate the interest rate
  var interestRate = 0;
  var creditScoreRange = "";
  if (creditScore >= 800) {
    interestRate = 0.04;
    creditScoreRange = "Excellent";
  } else if (creditScore >= 740 && creditScore < 800) {
    interestRate = 0.07;
    creditScoreRange = "Very Good";
  } else if (creditScore >= 670 && creditScore < 740) {
    interestRate = 0.09;
    creditScoreRange = "Good";
  } else if (creditScore >= 580 && creditScore < 670) {
    interestRate = 0.11;
    creditScoreRange = "Fair";
  } else if (creditScore >= 0 && creditScore < 580) {
    interestRate = 0.13;
    creditScoreRange = "Poor";
  }

  // Calculate the monthly payment
  var monthlyPayment = carCost * (interestRate / 12) / (1 - Math.pow(1 + interestRate / 12, -loanTerm));
  monthlyPayment = monthlyPayment.toFixed(2);
};