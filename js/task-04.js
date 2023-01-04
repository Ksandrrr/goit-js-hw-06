const btnPop = document.querySelector(`[data-action="decrement"]`)
const btnPush = document.querySelector(`[data-action="increment"]`)
const span = document.querySelector(`#value`) 
let counterValue = 0;
btnPush.addEventListener(`click`, () => {
   span.textContent = counterValue += 1
})
btnPop.addEventListener(`click`, () => {
   if (counterValue <= 0) {
      span.textContent = counterValue = 0
   } else if (counterValue > 0) {
      span.textContent = counterValue -= 1
   }
}) 