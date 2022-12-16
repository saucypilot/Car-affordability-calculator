document.getElementById("calculate").onclick = calculate;

function calculate() {
  // Get the values from the processInputValues() function
  var { carCost, yearlyIncome, tradeIn, insurance } = processInputValues();
  // Calculate the total cost of the car
  var carCostWithInsurance = carCost + insurance;
  // Calculate 20% on yearly income
  var TwentyPerOfIncome = yearlyIncome * 0.2;

  document.getElementById("carCostWithInsurance").innerText = carCostWithInsurance;
  document.getElementById("twentyPercent").innerText = TwentyPerOfIncome;
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
  // convert all the values to integers
  carCost = parseInt(carCost);
  yearlyIncome = parseInt(yearlyIncome);
  tradeIn = parseInt(tradeIn);
  insurance = parseInt(insurance);

  return { carCost, yearlyIncome, tradeIn, insurance };
}