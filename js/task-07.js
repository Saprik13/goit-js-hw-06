const refs = {
    fontSizeControl: document.querySelector("#font-size-control"),
    textSize: document.querySelector("#text")
}
refs.fontSizeControl.addEventListener("input", (event) => {
    refs.textSize.style.fontSize = `${event.currentTarget.value}px`;
});