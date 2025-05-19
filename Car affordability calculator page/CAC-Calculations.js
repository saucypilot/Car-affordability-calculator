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
  var customAlertBox = document.getElementById("custom-alert-box");
  var customAlertMessage = document.getElementById("custom-alert-message");
  customAlertMessage.innerHTML = message;
  customAlertBox.style.display = "flex";
  var customAlertOkayButton = document.getElementById("custom-alert-okay-button");
  customAlertOkayButton.addEventListener("click", function() {
    customAlertBox.style.display = "none";
  });
}

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

async function getInflationRate() {
  const BLS_API_URL = 'http://localhost:3000/get-inflation';
  const CPI_SERIES_ID = 'CUUR0000SA0';
  const CPI_YEARS_BACK = 3;
  const endYear = new Date().getFullYear();
  const startYear = endYear - CPI_YEARS_BACK;
  const response = await fetch(BLS_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      seriesid: [CPI_SERIES_ID],
      startyear: startYear.toString(),
      endyear: endYear.toString()
    })
  });
  const json = await response.json();
  if (json.status !== 'REQUEST_SUCCEEDED') throw new Error('BLS API failed');
  const cpiData = json.Results.series[0].data;
  const recentYear = cpiData.find(d => d.period === 'M01' && d.year === endYear.toString());
  const pastYear = cpiData.find(d => d.period === 'M01' && d.year === startYear.toString());
  if (!recentYear || !pastYear) throw new Error('Incomplete CPI data');
  return (parseFloat(recentYear.value) - parseFloat(pastYear.value)) / parseFloat(pastYear.value);
}

calculateButton.addEventListener('click', async () => {
  try {
    let inflationRate = await getInflationRate();

    var carCost = document.getElementById("carCost").value;
    var yearlyIncome = document.getElementById("yearlyIncome").value;
    var tradeIn = document.getElementById("tradeIn").value;
    var downPayment = document.getElementById("downPayment").value;
    var creditScore = document.getElementById("creditScore").value;
    var loanTerm = document.getElementById("loanTerm").value;

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

    var twentyPercentOfIncome = yearlyIncome * 0.2;

    carCost = carCost - tradeIn - downPayment;
    carCost = carCost * (1 + inflationRate);

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

    var monthlyPayment = carCost * (interestRate / 12) / (1 - Math.pow(1 + interestRate / 12, -loanTerm));
    monthlyPayment = monthlyPayment.toFixed(2);

    document.getElementById("twentyPercentOfIncome").innerHTML = "$" + twentyPercentOfIncome;
    document.getElementById("creditScoreRange").innerHTML = creditScoreRange;
    document.getElementById("interestRate").innerHTML = interestRate;
    document.getElementById("monthlyPayment").innerHTML = "$" + monthlyPayment;
    document.getElementById("isMonthlyPaymentInRange").style.display = "block";

    var isMonthlyPaymentInRange = document.getElementById("isMonthlyPaymentInRange");
    var monthlySalary = yearlyIncome / 12;
    if (monthlyPayment > monthlySalary * 0.2) {
      isMonthlyPaymentInRange.innerHTML = "Your monthly payment is too high. You can't afford this car unfortunately.";
    } else {
      isMonthlyPaymentInRange.innerHTML = "Looks like you can afford this car. Congratulations!";
    }

    questions.replaceWith(outputElement);
    outputElement.style.display = "grid";
  } catch (error) {
    customAlert('Could not fetch inflation data: ' + error.message);
  }
});