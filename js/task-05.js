const refs = {
  inputName: document.querySelector('#name-input'),
  outputName: document.querySelector('#name-output'),
};

const changeOutput = (event) => {
  if (event.target.value.length === 0) {
    return (refs.outputName.innerText = 'Anonymous');
  }
  refs.outputName.innerText = event.target.value;
};
refs.inputName.addEventListener('input', changeOutput);
