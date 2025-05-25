import { customAlert } from './customAlert.js';
import { getInflationRate } from './getInflationRate.js';

export async function handleCalculation() {
  try {
    let inflationRate = await getInflationRate();

    let carCost = document.getElementById("carCost").value;
    let yearlyIncome = document.getElementById("yearlyIncome").value;
    let tradeIn = document.getElementById("tradeIn").value;
    let downPayment = document.getElementById("downPayment").value;
    let creditScore = document.getElementById("creditScore").value;
    let loanTerm = document.getElementById("loanTerm").value;

    if (carCost === "" || yearlyIncome === "" || tradeIn === "" || downPayment === "" || creditScore === "" || loanTerm === "") {
      customAlert("Please enter all the answers for each question.");
      return;
    }

    carCost = carCost.replace(/[^0-9]/g, "");
    yearlyIncome = yearlyIncome.replace(/[^0-9]/g, "");
    tradeIn = tradeIn.replace(/[^0-9]/g, "");
    downPayment = downPayment.replace(/[^0-9]/g, "");
    creditScore = creditScore.replace(/[^0-9]/g, "");
    loanTerm = loanTerm.replace(/[^0-9]/g, "");

    carCost = parseInt(carCost);
    yearlyIncome = parseInt(yearlyIncome);
    tradeIn = parseInt(tradeIn);
    downPayment = parseInt(downPayment);
    creditScore = parseInt(creditScore);
    loanTerm = parseInt(loanTerm);

    if (downPayment == "") {
      downPayment = 0;
    }

    let twentyPercentOfIncome = yearlyIncome * 0.2;
    carCost = carCost - tradeIn - downPayment;
    carCost = carCost * (1 + inflationRate);

    let interestRate = 0;
    let creditScoreRange = "";
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

    let monthlyPayment = carCost * (interestRate / 12) / (1 - Math.pow(1 + interestRate / 12, -loanTerm));
    monthlyPayment = monthlyPayment.toFixed(2);

    document.getElementById("twentyPercentOfIncome").innerHTML = "$" + twentyPercentOfIncome;
    document.getElementById("creditScoreRange").innerHTML = creditScoreRange;
    document.getElementById("interestRate").innerHTML = interestRate;
    document.getElementById("monthlyPayment").innerHTML = "$" + monthlyPayment;
    document.getElementById("isMonthlyPaymentInRange").style.display = "block";

    let isMonthlyPaymentInRange = document.getElementById("isMonthlyPaymentInRange");
    let monthlySalary = yearlyIncome / 12;
    if (monthlyPayment > monthlySalary * 0.2) {
      isMonthlyPaymentInRange.innerHTML = "Your monthly payment is too high. You can't afford this car unfortunately.";
    } else {
      isMonthlyPaymentInRange.innerHTML = "Looks like you can afford this car. Congratulations!";
    }

    // Show the output section and hide the question form
    document.getElementById("question-wrapper").replaceWith(document.getElementById("output"));
    document.getElementById("output").style.display = "grid";
  } catch (error) {
    customAlert('Could not fetch inflation data: ' + error.message);
  }
}
