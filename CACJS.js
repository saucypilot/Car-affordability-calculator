document.getElementById("calculate").onclick = calculate;

// make variables for credit score ranges
var excellent = creditScore >= 800
var veryGood = creditScore >= 740 && creditScore < 800;
var good = creditScore >= 670 && creditScore < 740;
var fair = creditScore >= 580 && creditScore < 670;
var poor = creditScore >= 0 && creditScore < 580;

function processInputValues() {
  // Get the values from the input fields
  var carCost = document.getElementById("carCost").value;
  var yearlyIncome = document.getElementById("yearlyIncome").value;
  var tradeIn = document.getElementById("tradeIn").value;
  var downPayment = document.getElementById("downPayment").value;
  var creditScore = document.getElementById("creditScoreRange").value;
  var loan = document.getElementById("loan").value;
  return { carCost, yearlyIncome, tradeIn, downPayment, creditScore, loan };
}

function removeUnwantedStrings( carCost, yearlyIncome, tradeIn, downPayment, creditScore, loan){
  carCost = carCost.replace(/[^0-9]/g, "");
  yearlyIncome = yearlyIncome.replace(/[^0-9]/g, "");
  tradeIn = tradeIn.replace(/[^0-9]/g, "");
  downPayment = downPayment.replace(/[^0-9]/g, "");
  creditScore = creditScore.replace(/[^0-9]/g, "");
  loan = loan.replace(/[^0-9]/g, "");
  return { carCost, yearlyIncome, tradeIn, downPayment, creditScore, loan };
}

function convertToNumbers(carCost, yearlyIncome, tradeIn, downPayment, creditScore, loan){
  // convert all the values to integers
  carCost = parseInt(carCost);
  yearlyIncome = parseInt(yearlyIncome);
  tradeIn = parseInt(tradeIn);
  downPayment = parseInt(downPayment);
  creditScore = parseInt(creditScore);
  loan = parseInt(loan);
  return { carCost, yearlyIncome, tradeIn, downPayment, creditScore, loan };
}

function calculate() {
  // Get the values from the processInputValues() function
  var { carCost, yearlyIncome, tradeIn, downPayment } = processInputValues();
  // Calculate 20% on yearly income
  TwentyPerOfIncome = yearlyIncome * 0.2;
  // Calculate the total cost of the car
  carCost = carCost - tradeIn - downPayment;
  // Calculate the interest rate
  var interestRate = 0;
  if (excellent) {
    interestRate = 0.05;
  } else if (veryGood) {
    interestRate = 0.07;
  } else if (good) {
    interestRate = 0.09;
  } else if (fair) {
    interestRate = 0.11;
  } else if (poor) {
    interestRate = 0.13;
  }
  // Calculate the monthly payment
  var monthlyPayment = (carCost * interestRate) / (1 - Math.pow(1 + interestRate, -loan));
  // Call the displayResults function, passing in the values to display
  displayResults(TwentyPerOfIncome, monthlyPayment, creditScoreRange);
}

function displayResults(TwentyPerOfIncome, monthlyPayment, creditScoreRange) {
document.getElementById("twentyPercent").innerText = TwentyPerOfIncome;
document.getElementById("creditScore").innerText = creditScoreRange;
document.getElementById("monthlyPayment").innerText = monthlyPayment;
}