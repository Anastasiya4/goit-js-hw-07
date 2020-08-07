'use strict'

const catListRef = document.querySelector('#categories');
const itemListRef = document.querySelectorAll('li.item');
const titleRef = document.querySelector('h2');

console.log(`В списке ${itemListRef.length} каиегорий.`);

itemListRef.forEach(item => console.log(`Категория:${titleRef.textContent}
Количество элементов: ${item.querySelectorAll('li').length}`));
