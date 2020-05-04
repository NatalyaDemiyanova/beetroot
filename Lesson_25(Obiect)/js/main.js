'use strict';

// 1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:

// Функция для вывода на экран информации об автомобиле;

// Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.

//  const car = {
//     manufacturer : 'Toyota',
//     model : 'Camry',
//     year : 2020,
//     speed : 100
//  }

//  function infoCar() {
//      console.log(car);
//  }
//  infoCar();

//  function calcTime(l) {
//      let t = l / car.speed;
//      if( t < 4 ) {
//          return t;
//      } else {
//          return t + Math.floor( t / 4);
//      }
//  }
//  console.log(calcTime(1500));

// 2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом: 

// Функция сложения 2-х объектов-дробей;
// Функция вычитания 2-х объектов-дробей;
// Функция умножения 2-х объектов-дробей;
// Функция деления 2-х объектов-дробей;
// Функция сокращения объекта-дроби.

// const obj3 = {
//     upNumber : 'a',
//     downNumber : 'b'
// };

// const obj4 = {
//     upNumber : 'c',
//     downNumber : 'd'
// };

// function addFractions (a, b, c, d) {
//     if ( b == d ) {
//         return a + c + '/' + b ;
//     } 
//     else {
//         return a * d + c * b + '/' + b * d ;
//     }
// }
// console.log(addFractions(2, 3, 3, 4));


// function subtractionFractions (a, b, c, d) {
//     if ( b == d ) {
//         return a - c + '/' + b ;
//     } 
//     else {
//         return a * d - c * b + '/' + b * d ;
//     }
// }
// console.log(subtractionFractions(2, 3, 3, 3));

const obj1 = {
    upNumber : 3,
    downNumber : 4
};

const obj2 = {
    upNumber : 2,
    downNumber : 3
}; 

function multiplicationFractions (a, b) {
    return obj1.upNumber * obj2.upNumber + '/' + obj1.downNumber * obj2.downNumber;
}
console.log(multiplicationFractions(obj1, obj2));


function fractionation(obj1, obj2) {
    return obj1.upNumber * obj2.downNumber + '/' + obj1.downNumber * obj2.upNumber;
}
console.log(fractionation(obj1, obj2));



// 3. Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом: 

// Функция вывода времени на экран;

// Функция изменения времени на переданное количество секунд;

// Функция изменения времени на переданное количество минут;

// Функция изменения времени на переданное количество часов. 

// Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая. Например, если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».
