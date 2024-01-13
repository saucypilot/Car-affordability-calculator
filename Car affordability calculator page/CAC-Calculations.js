const calculateButton = document.querySelector('#calculate-button');
const outputElement = document.querySelector('#output');
const questions = document.querySelector('#question-wrapper');

// Add a dollar sign to the input fields
const inputElements = document.querySelectorAll(".dollar-input");

inputElements.forEach((inputElement) => {
  inputElement.addEventListener("input", (event) => {
    const value = event.target.value;
    const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
    if (!isNaN(numericValue)) {
      event.target.value = "$" + numericValue;
    } else {
      event.target.value = "";
    }
  });
});


// Custom alert function
function customAlert(message) {
  // Get the custom alert box and message elements
  var customAlertBox = document.getElementById("custom-alert-box");
  var customAlertMessage = document.getElementById("custom-alert-message");

  // Set the message text
  customAlertMessage.innerHTML = message;

  // Show the custom alert box
  customAlertBox.style.display = "flex";

  // Add event listener to the okay button
  var customAlertOkayButton = document.getElementById("custom-alert-okay-button");
  customAlertOkayButton.addEventListener("click", function() {
    // Hide the custom alert box
    customAlertBox.style.display = "none";
  });
}

// Add event listeners to restrict input to numeric values for credit score and loan term
const creditScoreInput = document.getElementById("creditScore");
const loanTermInput = document.getElementById("loanTerm");

creditScoreInput.addEventListener("input", (event) => {
  const value = event.target.value;
  event.target.value = value.replace(/[^0-9]/g, "");
});

loanTermInput.addEventListener("input", (event) => {
  const value = event.target.value;
  event.target.value = value.replace(/[^0-9]/g, "");
});

/* 
--------------------------------------------------
*/

// Get the values from the input fields when user clicks on the "Calculate" button
calculateButton.addEventListener('click', () => {
  // Get the values from the input fields
  var carCost = document.getElementById("carCost").value;
  var yearlyIncome = document.getElementById("yearlyIncome").value;
  var tradeIn = document.getElementById("tradeIn").value;
  var downPayment = document.getElementById("downPayment").value;
  var creditScore = document.getElementById("creditScore").value;
  var loanTerm = document.getElementById("loanTerm").value;

  // Check if any of the input fields are empty
  if (carCost === "" || yearlyIncome === "" || tradeIn === "" || downPayment === "" || creditScore === "" || loanTerm === "") {
    // Call the customAlert function with the message
    customAlert("Please enter all the answers for each question.");
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

  // Replace questionWrapperElement with outputElement
  questions.replaceWith(outputElement);

  // Set the display of `outputElement` to `grid`
  outputElement.style.display = "grid";
});

