'use strict'
 const inputRef = document.querySelector('#validation-input');

 function borderColor(event) {
 return event.target.value.length == inputRef.getAttribute('data-length') ? inputRef.setAttribute('class', 'valid')
 : inputRef.setAttribute('class', 'invalid');
 }

 inputRef.addEventListener('blur', borderColor);