function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// пошук елементів
const divBox = document.querySelector(`#boxes`)
const input = document.querySelector(`#controls input`)
const allDiv = document.querySelector(`#controls`)
const creatbtn = document.querySelector(`[data-create]`)
const destroybtn = document.querySelector(`[data-destroy]`)

// Стилізація нових блоків
divBox.style.display = `flex`
divBox.style.flexWrap = `wrap`
divBox.style.alignItems = `center`

// функція створення блоків
let sizeStyle = 30; 
function creatElm(value) {
  const title = document.createElement("div");
  divBox.append(title)
  title.style.backgroundColor = getRandomHexColor();
  title.style.height = `${sizeStyle}px`;
  title.style.width = `${sizeStyle}px`;
  
  for (let i = 1; i < value; i++) {
    sizeStyle += 10
    console.log(sizeStyle)
    creatElm()
  }
}

// Функція Бездельнік
function send() {
}

// функція кнопки  яка викликає створення блоків
const creatHandleClick = () => {
  if (input.value >= 1) {
    creatElm(input.value)
  }
};

// функція видалення всіх блоків
const destroyHandleClick = () => {
  divBox.replaceChildren()
  sizeStyle = 30
  input.value = ``
}

// додавання подій
creatbtn.addEventListener("click", creatHandleClick);
destroybtn.addEventListener("click", destroyHandleClick);
input.addEventListener(`change`, send)

