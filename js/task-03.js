const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const list = document.querySelector(`.gallery`);

const creat = document.createElement(`li`)
list.append(creat)
const list2 = document.querySelector(`.gallery li`)

const markup = images.flatMap((images) => `<img class=list width= 300px src = ${images.url} alt = ${images.alt}>`)
list2.insertAdjacentHTML("beforeend", markup)
const imgStyle = document.querySelector(`.list`)
imgStyle.style.display = `flax`

