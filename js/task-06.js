const input = document.querySelector('#validation-input');

input.addEventListener('blur', (event) => {
  const inputValue = parseInt(event.target.getAttribute('data-length'), 10);
  event.target.classList.toggle(
    'valid',
    inputValue === event.target.value.length
  );
  event.target.classList.toggle(
    'invalid',
    inputValue !== event.target.value.length
  );
});
