const input = document.querySelector("#validation-input");

input.addEventListener("blur", onInputBlur);

function onInputBlur() {
  if (input.value.length < input.dataset.length) {
    input.classList.add("invalid");
  } else {
     input.classList.remove("invalid");
     input.classList.add("valid");
  }
}