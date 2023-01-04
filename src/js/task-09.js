function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.querySelector(`body`)
const button = document.querySelector(`.change-color`)
const spanStyle = document.querySelector(`.color`)
const handleClick = event => {
body.style.backgroundColor = getRandomHexColor()
  spanStyle.textContent = getRandomHexColor()
}
button.addEventListener(`click`, handleClick )