'use strict'


const targetButtonRef = document.querySelector('[data-action="decrement"]',);
const removeButtonRef = document.querySelector('[data-action="increment"',);


const value = document.querySelector('#value');

let counterValue = 0;
function decrement() {
 value.textContent = counterValue -= 1;
}

function increment() {
    value.textContent = counterValue += 1;
}

removeButtonRef.addEventListener('click', increment);

targetButtonRef.addEventListener('click', decrement);
