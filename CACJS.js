document.getElementById("calculate").onclick = calculate;

function calculate() {
  var carCost = document.getElementById("carCost").value;
  var yearlyIncome = document.getElementById("yearlyIncome").value;
  var tradeIn = document.getElementById("tradeIn").value;
  var insurance = document.getElementById("insurance").value;
  // convert all the values to numbers
  carCost = Number(carCost);
  yearlyIncome = Number(yearlyIncome);
  tradeIn = Number(tradeIn);
  insurance = Number(insurance);

  var TwentyPerOfIncome = yearlyIncome * 0.2;

  // Get the element where we want to display the result
  var TwentyPerOfIncome_Output = document.getElementById("twentyPercent");

  // Displays the result
  TwentyPerOfIncome_Output.innerHTML = TwentyPerOfIncome;
}