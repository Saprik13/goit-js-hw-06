
const refs = {
  bgChangerBtn: document.querySelector(".change-color"),
  bgColor: document.querySelector(".color"),
  body: document.querySelector("body")
}
refs.bgChangerBtn.addEventListener("click",changeColor);


const getRandomHexColor = () => {
 return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


function changeColor() {
refs.body.style.backgroundColor = getRandomHexColor();
refs.bgColor.textContent = getRandomHexColor();
}