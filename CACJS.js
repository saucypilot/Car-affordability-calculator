document.getElementById("calculate").onclick = calculate;

function calculate() {
  // Get the values from the processInputValues() function
  var { carCost, yearlyIncome, tradeIn, insurance } = processInputValues();
  // Calculate 20% on yearly income
  var TwentyPerOfIncome = yearlyIncome * 0.2;
  // Get the element where we want to display the result
  var TwentyPerOfIncome_Output = document.getElementById("twentyPercent");
  // Displays the result
  TwentyPerOfIncome_Output.innerText = TwentyPerOfIncome;
}

function processInputValues() {
  // Get the values from the input fields
  var carCost = document.getElementById("carCost").value;
  var yearlyIncome = document.getElementById("yearlyIncome").value;
  var tradeIn = document.getElementById("tradeIn").value;
  var insurance = document.getElementById("insurance").value;
  // Remove the non-digit characters from each value
  carCost = carCost.replace(/[^0-9]/g, "");
  yearlyIncome = yearlyIncome.replace(/[^0-9]/g, "");
  tradeIn = tradeIn.replace(/[^0-9]/g, "");
  insurance = insurance.replace(/[^0-9]/g, "");
  // convert all the values to ints
  carCost = parseInt(carCost);
  yearlyIncome = parseInt(yearlyIncome);
  tradeIn = parseInt(tradeIn);
  insurance = parseInt(insurance);

  return { carCost, yearlyIncome, tradeIn, insurance };
}