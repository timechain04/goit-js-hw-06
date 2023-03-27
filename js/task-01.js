/*
В HTML есть список категорий ul#categories.
Напиши скрипт который:

Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента 
(тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
Для выполнения этой задачи нужно использовать метод forEach() и свойства навигации по DOM.
В результате, в консоли будут выведены такие сообщения.

Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5
*/


const itemsEL = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemsEL.length}`);

itemsEL.forEach(el => {
    let titleEl = el.querySelector('h2');
    console.log(`Category: ${titleEl.textContent}`);

    let lengthEl = el.querySelectorAll('li');
    console.log(`Elements: ${lengthEl.length}`);
})















