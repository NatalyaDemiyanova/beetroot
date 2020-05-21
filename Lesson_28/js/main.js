'use strict';

const $list = document.getElementById("list");



// for (let i = 1; i < 6; i++){
//     const $listItem = document.createElement("li");
//     $listItem.append(`list item ${i}`);
//     $list.appendChild($listItem);
// }

// console.log($list);

// const $listElements = document.querySelectorAll("#list li");

// const $listElementsCopy = [...$listElements];
// $listElements.forEach(el => console.log(el));

const $listItem2 = [...new Array(100).keys()].map(el => `<li><button>${el+1}</button></li>`).join('');
$list.innerHTML = $listItem2;

console.log($listItem2);
    

