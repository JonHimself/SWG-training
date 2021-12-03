const button = document.getElementById("form-btn");
const reset = document.getElementById("form-btn2");
const form = document.forms["form"];
const error = document.getElementById("error");
const inputs = document.querySelectorAll(".text");
const checks = document.querySelectorAll(".check");
const area = document.querySelector("textarea");

const submit = (e) => {
  e.preventDefault();

  form.className = "needs-validation col-lg-6 col-md-9 col";

  if (!form.checkValidity()) {
    form.className = "was-validated col-lg-6 col-md-9 col";
    error.setAttribute("style", "");
    console.log(inputs);
    return false;
  }
};

const resetForm = (e) => {
  e.preventDefault();
  form.className = "needs-validation col-lg-6 col-md-9 col";
  error.setAttribute("style", "display:none");
  inputs.forEach((input) => (input.value = ""));
  checks.forEach((check) => (check.checked = false));
  area.value = "";
};

button.addEventListener("click", submit);
reset.addEventListener("click", resetForm);
