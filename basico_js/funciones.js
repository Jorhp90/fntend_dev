//funcion declarativa; nombre explícito
function sumar(a, b) {
    return a + b;
}
sumar(2, 3);

function saludar(nombre) {
    console.log(`hola, ${nombre}`);
}

var nombre = function(nombre){
    console.log(`Hola ${nombre}`)
}
