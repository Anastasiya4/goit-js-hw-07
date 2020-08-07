'use strict'

const ingrListRef = document.querySelector('#ingredients');

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const productList = ingredients.map(item =>{
    const itemList = document.createElement('li');
    itemList.textContent = item;
    return itemList;
})
ingrListRef.append(...productList);