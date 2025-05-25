export function initializeDollarInputs() {
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
}
