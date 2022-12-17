document.getElementById("calculate").onclick = calculate;

function processInputValues() {
  // Get the values from the input fields
  var monthlyPayment = document.getElementById("monthlyPayment").value;
  var yearlyIncome = document.getElementById("yearlyIncome").value;
  var tradeIn = document.getElementById("tradeIn").value;
  var insurance = document.getElementById("insurance").value;
  
  // Remove the non-digit characters from each value
  monthlyPayment = monthlyPayment.replace(/[^0-9]/g, "");
  yearlyIncome = yearlyIncome.replace(/[^0-9]/g, "");
  tradeIn = tradeIn.replace(/[^0-9]/g, "");
  insurance = insurance.replace(/[^0-9]/g, "");
  
  // convert all the values to integers
  monthlyPayment = parseInt(monthlyPayment);
  yearlyIncome = parseInt(yearlyIncome);
  tradeIn = parseInt(tradeIn);
  insurance = parseInt(insurance);

  return { monthlyPayment, yearlyIncome, tradeIn, insurance };
}

function displayResults(TwentyPerOfIncome) {
  document.getElementById("twentyPercent").innerText = TwentyPerOfIncome;
}

function calculate() {
  // Get the values from the processInputValues() function
  var { monthlyPayment, yearlyIncome, tradeIn, insurance } = processInputValues();
  // Calculate 20% on yearly income
  var TwentyPerOfIncome = yearlyIncome * 0.2;

  // Call the displayResults function, passing in the values to display
  displayResults(TwentyPerOfIncome);
}