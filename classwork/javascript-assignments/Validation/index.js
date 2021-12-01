let numberFun = document.forms["numberFun"];
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let results = document.getElementById("results");
let submitButton = document.getElementById("submitButton");

function resetView() {
  numberFun.className = "needs-validation";
  results.style.display = "none";
  submitButton.innerText = "Calculate";
  num1.focus();
}

function validate() {
  numberFun.className = "needs-validation";

  if (!numberFun.checkValidity()) {
    numberFun.className = "was-validated";
    return false;
  }

  var operand1 = parseInt(num1.value, 10);
  var operand2 = parseInt(num2.value, 10);

  document.getElementById("addResult").innerText = operand1 + operand2;
  document.getElementById("subtractResult").innerText = operand1 - operand2;
  document.getElementById("multiplyResult").innerText = operand1 * operand2;
  document.getElementById("divideResult").innerText = operand1 / operand2;

  results.style.display = "block";
  submitButton.innerText = "Recalculate";
  return false;
}
