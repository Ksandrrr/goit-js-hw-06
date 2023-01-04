const input = document.querySelector(`#validation-input`)
const attribute = input.getAttribute(`data-length`)
let artNumb = Number(attribute)


input.addEventListener(`blur`, () => {
    if (input.value.length === artNumb) {
        input.classList.add(`valid`)
        input.classList.replace(`invalid`,`valid`)
    } else if (input.value.length !== artNumb) {
        input.classList.add(`invalid`)
        input.classList.replace(`valid`, `invalid`)
    }
})
  