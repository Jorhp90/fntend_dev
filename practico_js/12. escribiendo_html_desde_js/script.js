const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const input = document.querySelector('input');
const parrafito = document.querySelector('.parrafito');
const pId = document.querySelector('#pId');

/* modify html selector (unsafe to changes) */
h1.innerHTML = 'Patitos <br> como tu';
/* modify text of selector (safe to changes) */
h1.innerText = 'Patitos como tu';
/* get attribute (e.g. class) of selector */
// console.log(h1.getAttribute("class"));
/* change attr of selector (class green -> red) */
// h1.setAttribute("class", "rojo");

// change class of selectors (original class="verde")
// add class e.g. class="verde rojo"
h1.classList.add('rojo');
// remove class e.g. class="rojo"
h1.classList.remove('verde');
// boolean class e.g. class="rojo"
console.log(h1.classList.contains('rojo'));

// manipulate input attributes
input.placeholder = "epale prru";
input.value = 1234;


// create an element from scratch e.g. an img
const img = document.createElement('img');
// add attribute to img; src
img.setAttribute('src', 'https://mixme.com.br/wp-content/uploads/2021/10/Ceu-5-credito-Erico-Toscano-768x512.jpeg');
// insert img to an existing element
pId.append(img);