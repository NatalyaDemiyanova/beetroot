'use strict';

// 1. Создать страницу, которая выводит нумерованный список песен:

const playList = [
    {
    author: "LED ZEPPELIN",
    song:"STAIRWAY TO HEAVEN"
    },

    {
    author: "QUEEN",
    song:"BOHEMIAN RHAPSODY"
    },

    {
    author: "LYNYRD SKYNYRD",
    song:"FREE BIRD"
    },

    {
    author: "DEEP PURPLE",
    song:"SMOKE ON THE WATER"
    },

    {
    author: "JIMI HENDRIX",
    song:"ALL ALONG THE WATCHTOWER"
    },

    {
    author: "AC/DC",
    song:"BACK IN BLACK"
    },

    {
    author: "QUEEN",
    song:"WE WILL ROCK YOU"
    },

    {
    author: "METALLICA",
    song:"ENTER SANDMAN"
    }
];

console.log(playList[2].song);


playList.forEach(idx => {
    const itemSong = document.createElement('li');
    const song = playList[idx].song;
    itemSong.innerHTML = 'playList[idx].song';
    document.getElementById('list').append('itemSong');
    console.log(itemSong);
})


// 2. Создать HTML-страницу с кнопкой "Открыть" и модальным окном. На модальном окне должен быть текст и кнопка "Закрыть". Изначально модальное окно не отображается. При клике на кнопку "Открыть" появляется модальное окно, на кнопку "Закрыть" – исчезает.

// 3. Создать HTML-страницу со светофором и кнопкой, которая переключает светофор на следующий цвет.
    

