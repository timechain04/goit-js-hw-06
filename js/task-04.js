/*
Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.
Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
Обновляй интерфейс новым значением переменной counterValue.

*/


const btnIncr = document.querySelector('button[data-action="increment"]');
const btnDecr = document.querySelector('button[data-action="decrement"]');
const value = document.querySelector('#value');
let counter = 0;

let increment = () => {
    counter += 1;
    value.textContent = counter;
}

let decrement = () => {
    counter -= 1;
    value.textContent = counter;
}

btnIncr.addEventListener('click', increment);
btnDecr.addEventListener('click', decrement);

















