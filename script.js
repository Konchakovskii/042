'use strict';

const box = document.querySelector('.box'),
        btn = document.querySelector('.button1'),
        btnUp = document.querySelector('.button2');

// const width = box.clientWidth;
// const height = box.clientHeight;

// const width = box.offsetWidth;
// const height = box.offsetHeight;

const width = box.scrollWidth;
const height = box.scrollHeight;

console.log(width, height);


btn.addEventListener('click', () => {
    box.style.height = `${height}px`;
    // console.log(box.scrollTop);
});

btnUp.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
});

console.log(box.getBoundingClientRect().top);

const style = window.getComputedStyle(box);

console.log(style.display);

console.log(document.documentElement.scrollTop);


window.scrollBy(0, 400);
window.scrollBy(0, 400);