const refs = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
  valueText: document.querySelector('#value'),
};

let counterValue = 0;

const decrementValue = () => {
  counterValue -= 1;
  refs.valueText.textContent = counterValue;
};

const incrementValue = () => {
  counterValue += 1;
  refs.valueText.textContent = counterValue;
};

refs.decrementBtn.addEventListener('click', decrementValue);
refs.incrementBtn.addEventListener('click', incrementValue);