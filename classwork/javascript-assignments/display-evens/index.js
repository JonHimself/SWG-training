const start = document.getElementById("start");
const end = document.getElementById("end");
const step = document.getElementById("step");
const even = document.getElementById("even");
const error = document.getElementById("error");
const button = document.getElementById("btn");
const form = document.querySelector("form");

const evens = (e) => {
  e.preventDefault();
  form.className = "needs-validation";
  let sValue = parseInt(start.value, 10);
  let eValue = parseInt(end.value, 10);
  let stepValue = parseInt(step.value, 10);
  let entries = [sValue, eValue, stepValue];

  if (!form.checkValidity()) {
    form.className = "was-validated";
    return false;
  }

  if (eValue <= sValue) {
    error.innerText = "Ending Number must be larger than the Starting Number!";
    return false;
  }

  console.log(entries);
};

button.addEventListener("click", evens);
