const h1 = document.querySelector('h1');
const input1 = document.querySelector('#c1');
const input2 = document.querySelector('#c2');
const btn = document.querySelector("#btnCalcular");
const result = document.querySelector("#result");

// addEventListener -> event and function when event
btn.addEventListener('click', btnOnClick); 
// in addEventListener, function w/o parenthesis

function btnOnClick () {
    const sumaI = Number(input1.value) + Number(input2.value);
    result.innerHTML = "Resultado: " + sumaI;
}
