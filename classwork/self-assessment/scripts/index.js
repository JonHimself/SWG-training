const button = document.getElementById("form-btn");
const reset = document.getElementById("form-btn2");
const form = document.forms["form"];
const error = document.getElementById("error");

const submit = (e) => {
  e.preventDefault();

  form.className = "needs-validation col-lg-10 col-md-9 col mt-2";

  if (!form.checkValidity()) {
    form.className = "was-validated col-lg-10 col-md-9 col mt-2";
    error.setAttribute("style", "");
    console.log(inputs);
    return false;
  }
};

const resetForm = () => {
  window.location.reload();
};

button.addEventListener("click", submit);
reset.addEventListener("click", resetForm);
