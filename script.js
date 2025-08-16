// This function takes the type of operation, reads the input values, performs the calculation, and displays the result
function calculate(operation) {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const resultDiv = document.getElementById("result");
  // Check for valid inputs
  if (isNaN(num1) || isNaN(num2)) {
    resultDiv.textContent = "Result: Please enter valid numbers.";
    return;
  }
  let result;
  switch (operation) {
    case 'add':
      result = num1 + num2;
      break;
    case 'subtract':
      result = num1 - num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    case 'divide':
      if (num2 === 0) {
        resultDiv.textContent = "Result: Cannot divide by zero!";
        return;
      }
      result = num1 / num2;
      break;
    default:
      resultDiv.textContent = "Result: Invalid operation.";
      return;
  }
  resultDiv.textContent = "Result: " + result;
}
// This function clears both input fields and the result display
function clearFields() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("result").textContent = "Result: ";
}