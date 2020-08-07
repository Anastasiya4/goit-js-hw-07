'use strict'
const inputRef = document.querySelector('#name-input');
const nameLabelRef = document.querySelector('#name-output');

inputRef.addEventListener('change', event => {
    nameLabelRef.textContent = event.target.value || 'незнакомец';
})