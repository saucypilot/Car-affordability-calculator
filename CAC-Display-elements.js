//import the variables from the CAC-Calculations.js file
import { twentyPercentOfIncome, creditScoreRange, interestRate, monthlyPayment } from "./CAC-Calculations.js";

// Update the HTML elements with the calculated values
document.getElementById("twentyPercentOfIncome").innerHTML = "$" + twentyPercentOfIncome;
document.getElementById("creditScoreRange").innerHTML = creditScoreRange;
document.getElementById("interestRate").innerHTML = interestRate;
document.getElementById("monthlyPayment").innerHTML = "$" + monthlyPayment;
document.getElementById("isMonthlyPaymentInRange").style.display = "block";

// See's if the monthly payment is greater than 20% of income
var isMonthlyPaymentInRange = document.getElementById("isMonthlyPaymentInRange");
var monthlySalary = yearlyIncome / 12;
if (monthlyPayment > monthlySalary * 0.2) {
isMonthlyPaymentInRange.innerHTML = "Your monthly payment is too high. You can't afford this car unfortunately.";
} else {
isMonthlyPaymentInRange.innerHTML = "Looks like you can afford this car. Congratulations!";
}