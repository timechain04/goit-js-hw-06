/*
Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и
 нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.
Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>,
 сколько указано в amount и добавляет их в div#boxes.
Размеры самого первого <div> - 30px на 30px.
Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor 
для получения цвета.
Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.
*/


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input[type='number']");
const boxes = document.querySelector('#boxes');
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');

let numberRef;
input.addEventListener('input', (event) => {
  numberRef = event.target.value;
});

let size = 30;
function createBoxes(amount) {
  const allDiv = [];
  for (let i = 0; i < amount; i++) {
    const newDiv = document.createElement('div');
    allDiv.push(newDiv);
  }

  allDiv.forEach((div) => {
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    size += 10;
  })
  boxes.append(...allDiv);
}

buttonCreate.addEventListener('click', () => {
  createBoxes(numberRef);
});

buttonDestroy.addEventListener('click', () => {
  boxes.innerHTML = '';
  size = 30;
});

