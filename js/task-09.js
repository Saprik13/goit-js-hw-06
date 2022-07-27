function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  bgChangerBtn: document.querySelector('.change-color'),
  bgColor: document.querySelector('.color'),
  body: document.querySelector('body'),
};

refs.bgChangerBtn.addEventListener('click', changeColor);

function changeColor() {
  const color = getRandomHexColor();
  refs.bgColor.textContent = color;
  refs.body.style.backgroundColor = color;
}
