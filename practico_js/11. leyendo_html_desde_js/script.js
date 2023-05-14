/* functions to read html elements */
/* select all h1 selectors */
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const input = document.querySelector('input');
/* select by class, as css */
const parrafito = document.querySelector('.parrafito');
/* alternative 4 class, same result as previous */
/* const parrafito = document.getElementsByClassName('.parrafito'); */
/* select by id */
const pId = document.querySelector('#pId')

/* get the value of selector with .value */
console.log(input.value);
console.log({h1, p, input, parrafito, pId});