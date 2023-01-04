/////

const allElemCategory = document.querySelectorAll(`li.item`);
console.log(`Number of categories:`, allElemCategory.length)

/////

const title = document.querySelector(`.item`);
const title2 = title.firstElementChild
console.log(`Category:`,title2.textContent);

/////

const list = document.querySelector(`.item`);
const list2 = list.lastElementChild
const list3 = list2.children
console.log(`Elements:`, list3.length);

/////

const middleTitle = document.querySelector(`#categories`);
const middleTitle2 = middleTitle.firstElementChild
const middleTitle3 = middleTitle2.nextElementSibling;
const middleTitle4 = middleTitle3.firstElementChild
console.log(`Category:`, middleTitle4.textContent)

/////

const middlelist = document.querySelector(`#categories`);
const middlelist2 = middlelist.firstElementChild
const middlelist3 = middlelist2.nextElementSibling;
const middlelist4 = middlelist3.lastElementChild
const middlelist5 = middlelist4.children
console.log(`Elements:`,middlelist5.length)

/////

const titleLast = document.querySelector(`#categories`);
const titleLast2 = titleLast.lastElementChild
const titleLast3 = titleLast2.firstElementChild;
console.log(`Category:`, titleLast3.textContent);

////

const listLast = document.querySelector(`#categories`);
const listLast2 = listLast.lastElementChild
const listLast3 = listLast2.lastElementChild;
const listLast4 = listLast3.children
console.log(`Category:`, listLast4.length);

////

