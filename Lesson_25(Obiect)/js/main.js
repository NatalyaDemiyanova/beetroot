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

const obj1 = {
    upNum : 3,
    downNum : 4
};

const obj2 = {
    upNum : 2,
    downNum : 3
}; 

const isObject = (obj) => typeof obj === "object";
const format = function(obj) {
    if(isObject(obj)) {
        return `${a.upNum * b.downNum + b.upNum * a.downNum}/${a.downNum * b.downNum}` ;
    }
    return `Argument isn't a fraction`
} 

function sumFractions (a, b) {
    if( isObject(a) && isObject(b)) {
        return {
            upNum : `${a.upNum * b.downNum + b.upNum * a.downNum}`,
            downNum : `${a.downNum * b.downNum}`  
        };
        // (`${a.upNum * b.downNum + b.upNum * a.downNum}/${a.downNum * b.downNum}`) ;
    } return "a & b must be an object"
}
console.log(sumFractions(obj1, obj2));


function subtractionFractions (a, b) {
     return (`${a.upNum * b.downNum - b.upNum * a.downNum}/${a.downNum * b.downNum}`) ;
}
console.log(subtractionFractions(obj1, obj2));


function multiplicationFractions (a, b) {
    return (`${a.upNum * b.upNum}/${a.downNum * b.downNum}`);
}
console.log(multiplicationFractions(obj1, obj2));


function fractionation(a, b) {
    return (`${a.upNum * b.downNum}/${a.downNum * b.upNum}`);
}
console.log(fractionation(obj1, obj2));

const redaction = function(obj) {
    if(isObject(obj)) {

    }
};

// 3. Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом: 
// Функция вывода времени на экран;
// Функция изменения времени на переданное количество секунд;
// Функция изменения времени на переданное количество минут;
// Функция изменения времени на переданное количество часов. 
// Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая. Например, если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».

const time = {
    hours : 2,
    minutes : 13,
    seconds : 30
};

const showTime = function() {
    return (`${('0' + time.hours).slice(-2)}:${('0' + time.minutes).slice(-2)}:${('0' + time.seconds).slice(-2)}`);
};
console.log(showTime());

const changeTimeOnSecond = function(ss) {
    const changeSeconds = time.seconds + ss;
    if (changeSeconds > 59) {
        const extraMinutes = Math.floor(changeSeconds / 60);
        const newSeconds = changeSeconds % 60;
        return (`${('0' + time.hours).slice(-2)}:${('0' +(time.minutes + extraMinutes)).slice(-2)}:${('0' + newSeconds).slice(-2)}`);
    } 
    return (`${('0' + time.hours).slice(-2)}:${('0' + time.minutes).slice(-2)}:${('0' + changeSeconds).slice(-2)}`);
}
console.log(changeTimeOnSecond(13));


const changeTimeOnMinutes = function(mm) {
    const changeMinutes = time.minutes + mm;

    if (changeMinutes > 59) {
        const extraHours = Math.floor(changeMinutes / 60);
        const newMinutes = changeMinutes % 60;
        return (`${('0' + (time.hours + extraHours)).slice(-2)}:${('0' + newMinutes).slice(-2)}:${('0' + time.seconds).slice(-2)}`);
    } 
    return (`${('0' + time.hours).slice(-2)}:${('0' + changeMinutes).slice(-2)}:${('0' + time.seconds).slice(-2)}`);
}
console.log(changeTimeOnMinutes(10));
