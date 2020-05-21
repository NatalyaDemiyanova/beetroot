'use strict';

function insert(symbol) {
    document.forms.calc.textview.value = document.forms.calc.textview.value + symbol;
}

function backspace() {
    document.forms.calc.textview.value =  document.forms.calc.textview.value.slice(0, -1);
}

function clean() {
    document.forms.calc.textview.value = "";
}

// function equally() {
//     let exp = document.forms.calc.textview.value;
//     document.forms.calc.textview.value = eval(exp); 
// }

function equally() {
    document.forms.calc.textview.value = eval(document.forms.calc.textview.value); 
}

