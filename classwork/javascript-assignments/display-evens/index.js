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
  let collector = [];

  if (!form.checkValidity()) {
    form.className = "was-validated";
    return false;
  }

  if (eValue <= sValue) {
    error.innerText = "Ending Number must be larger than the Starting Number!";
    return false;
  }

  for (let i = sValue; i < eValue; i += stepValue) {
    collector.push(i);
  }

  let evenValues = collector.filter((value, i) => value % 2 === 0);
  even.innerText = evenValues.join(" ");
  console.log("Entries", entries);
  console.log("even values", evenValues);
};

button.addEventListener("click", evens);
