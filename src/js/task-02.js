const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic', 
  'Tomatos',
  'Herbs',
  'Condiments',
];
const List = document.querySelector(`#ingredients`)
const creatElmItem = document.createElement(`li`)
creatElmItem.textContent = ingredients[0];
const creatElmItem2 = document.createElement(`li`)
creatElmItem2.textContent = ingredients[1]
const creatElmItem3 = document.createElement(`li`)
creatElmItem3.textContent = ingredients[2]
const creatElmItem4 = document.createElement(`li`)
creatElmItem4.textContent = ingredients[3]
const creatElmItem5 = document.createElement(`li`)
creatElmItem5.textContent = ingredients[4]
const creatElmItem6 = document.createElement(`li`)
creatElmItem6.textContent = ingredients[5]
creatElmItem.classList.add(`.item`)
creatElmItem2.classList.add(`.item`)
creatElmItem3.classList.add(`.item`)
creatElmItem4.classList.add(`.item`)
creatElmItem5.classList.add(`.item`)
creatElmItem6.classList.add(`.item`)
List.append(creatElmItem, creatElmItem2,creatElmItem3,creatElmItem4,creatElmItem5,creatElmItem6)

