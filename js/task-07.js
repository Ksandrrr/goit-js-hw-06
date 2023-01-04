const input = document.querySelector(`#font-size-control`)
const span = document.querySelector(`#text`)


input.addEventListener(`input`, inputRange)
 span.style.fontSize = `${input.value}px`
function inputRange() {
    span.style.fontSize = `${input.value}px`
}




 


