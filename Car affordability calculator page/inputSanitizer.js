export function initializeInputSanitizer() {
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
}
 