
const input = document.querySelector("input");
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector("#boxes");

createBtn.addEventListener("click", () => createBoxes(input.value));
destroyBtn.addEventListener("click", destroyBoxes);

let boxHeight = 30;
let boxWidth = 30;



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  const newBoxes = [];
  for (let i = 1; i <= amount; i++) {
    const newBox = `<div style="width:${boxWidth}px; height:${boxHeight}px; background-color: ${getRandomHexColor()};"></div>`
     newBoxes.push(newBox)
  
    boxHeight += 10;
    boxWidth += 10;
  }
  boxes.insertAdjacentHTML("afterbegin", newBoxes.join(""));

  }

function destroyBoxes() {
  boxes.innerHTML = "";
  input.value = "";
}