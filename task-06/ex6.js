'use strict'
 const inputRef = document.querySelector('#validation-input');

 function borderColor(event) {
// return event.target.value.length 
if(Number(inputRef.getAttribute('data-length')) === event.target.value.length) {
    inputRef.setAttribute('class', 'valid')}
 else {
     inputRef.setAttribute('class', 'invalid')}

     return;
 };

 inputRef.addEventListener('blur', borderColor);