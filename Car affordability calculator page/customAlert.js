export function customAlert(message) {
  const customAlertBox = document.getElementById("custom-alert-box");
  const customAlertMessage = document.getElementById("custom-alert-message");
  customAlertMessage.innerHTML = message;
  customAlertBox.style.display = "flex";
  const customAlertOkayButton = document.getElementById("custom-alert-okay-button");
  // Remove any previous listeners
  const newButton = customAlertOkayButton.cloneNode(true);
  customAlertOkayButton.parentNode.replaceChild(newButton, customAlertOkayButton);
  newButton.addEventListener("click", function() {
    customAlertBox.style.display = "none";
  });
}
