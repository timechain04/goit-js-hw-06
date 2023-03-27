/*
В HTML есть пустой список ul#ingredients. В JavaScript есть массив строк.
Напиши скрипт, который для каждого элемента массива ingredients:
Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
Добавит название ингредиента как его текстовое содержимое.
Добавит элементу класс item.
После чего вставит все <li> за одну операцию в список ul#ingredients.
*/

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listEl = ingredients.map(ingredient => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList.add('item');
  return li
});
document.querySelector('#ingredients').append(...listEl);






























// const ingredientList = ingredients.map(ingredient => {
//   const li = document.createElement('li');
//   li.textContent = ingredient;
//   li.classList.add('item');
//   return li;
// });

// document.querySelector('#ingredients').append(...ingredientList);
