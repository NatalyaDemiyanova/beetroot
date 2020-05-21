'use strict';

// 1. Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.

// Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
// Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.
// Покупка продукта. Функция принимает название продукта и отмечает его как купленный.

const cart = [
   {name : 'bread', count: 2, bought : true},
   {name : 'milk', count: 1, bought : false},
   {name : 'candy', count: 5, bought : true},
   {name : 'tea', count: 1, bought : false}, 
   {name : 'eggs', count: 10, bought : false} 
];
console.log(cart);

const showCart = () => {
    const sortedCart = [...cart.sort((a, b) => {
        // return a.bought > b.bought ? -1 : a.bought < b.bought ? 1 : 0;
        if (a.bought > b.bought) return -1;
        if (a.bought < b.bought) return 1;
        if (a.bought === b.bought) return 0;
    })];
    console.log('Sorted cart: ', sortedCart);
};

const buy = (name) => {
    const idx = cart.findIndex( product => product.name.toLowerCase() === name.toLowerCase());
    if (idx >= 0 && !cart[idx].bought) {
        cart.splice(idx, 1, {...cart[idx], bought: true });
        console.log(`Buy ${name}: `, cart);
    } else if (idx >= 0) {
        console.log(`${name} have been bought `);
    } else {
        console.log(`Sorry... I can't find ${name} in a cart `);
    }
}

const addToCart = (name) => {
    const idx = cart.findIndex( product => product.name.toLowerCase() === name.toLowerCase() );
    if (idx >= 0) {
        const product = cart[idx];
        cart.splice(idx, 1, {...product, count: product.count + 1 });
    } else {
        cart.push({name, count: 1, bought : false});
    }
    console.log(`Add a ${name} to cart: `, cart);
};

showCart();
addToCart('tea');
addToCart('cheese');

buy('water');
buy('candy');
buy('milk');




// 2. Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. Написать следующие функции:

// Распечатка чека на экран;
// Подсчет общей суммы покупки;
// Получение самой дорогой покупки в чеке;
// Подсчет средней стоимости одного товара в чеке.


// 3. Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля. Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах <p></p>, добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.

// const styles = [
//     {name: "color", style: "red"},
//     {name: "fond-size", style: "30px"},
//     {name: "font-weight", style: "700"},
//     {name: "text-decoration", style: "underline"}
// ]

// const render = (styles, text) => {
//     // const style = styles.map( el => `${el.name}: ${el.style};`).join(" ");
//     const style = styles.map( ({ name, style }) => `${name}: ${style};`).join(" ");
//     const element = `<p style="${style}">${text}</p>`;
//     console.log(element);
//     document.write(element);
// };
// render(styles, "Hello");


// 4. Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и названия факультета, для которого она предназначена. Написать несколько функций для работы с ним^

// Вывод на экран всех аудиторий;
// Вывод на экран аудиторий для указанного факультета;
// Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, количества студентов и названия факультета;
// Функция сортировки аудиторий по количеству мест;
// Функция сортировки аудиторий по названию (по алфавиту).

