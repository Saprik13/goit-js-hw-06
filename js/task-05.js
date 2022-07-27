const refs = {
  inputName: document.querySelector('#name-input'),
  outputName: document.querySelector('#name-output'),
};

const changeOutput = (event) => {
  const inputValue = event.currentTarget.value;

  if (inputValue.length === 0) {
    refs.outputName.textContent = 'Anonymous';
  }
  refs.outputName.textContent = inputValue;
};
refs.inputName.addEventListener('input', changeOutput);
