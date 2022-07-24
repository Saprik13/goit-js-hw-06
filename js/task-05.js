const refs = {
  inputName: document.querySelector('#name-input'),
  outputName: document.querySelector('#name-output'),
};

const changeOutput = (event) => {
  refs.outputName.textContent = event.currentTarget.value;
  if (event.currentTarget.value === '') {
    refs.outName.textContent = 'Anonymous';
  }
};
refs.inputName.addEventListener('input', changeOutput);
