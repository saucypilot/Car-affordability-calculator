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
  var creditScore = document.getElementById("creditScore").value;
  var loan = document.getElementById("loan").value;
  
  // Remove the non-digit characters from each value
  carCost = carCost.replace(/[^0-9]/g, "");
  yearlyIncome = yearlyIncome.replace(/[^0-9]/g, "");
  tradeIn = tradeIn.replace(/[^0-9]/g, "");
  downPayment = downPayment.replace(/[^0-9]/g, "");
  creditScore = creditScore.replace(/[^0-9]/g, "");
  loan = loan.replace(/[^0-9]/g, "");
  
  // convert all the values to integers
  carCost = parseInt(carCost);
  yearlyIncome = parseInt(yearlyIncome);
  tradeIn = parseInt(tradeIn);
  downPayment = parseInt(downPayment);
  creditScore = parseInt(creditScore);
  loan = parseInt(loan);
  
  return { carCost, yearlyIncome, tradeIn, downPayment };
}

function displayResults(TwentyPerOfIncome) {
document.getElementById("twentyPercent").innerText = TwentyPerOfIncome;
}

function calculate() {
  // Get the values from the processInputValues() function
  var { carCost, yearlyIncome, tradeIn, downPayment } = processInputValues();
  // Calculate 20% on yearly income
  var TwentyPerOfIncome = yearlyIncome * 0.2;

  // Call the displayResults function, passing in the values to display
  displayResults(TwentyPerOfIncome);
}