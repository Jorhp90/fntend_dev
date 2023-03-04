var edad = 18;
if (edad === 18) {
    console.log("Puedes votar, será tu primera vez");
} else if (edad > 18) {
    console.log("Hola vegete");
} else {
    console.log("Skt chamako");
}

//operador terniario
condition ? true : false;

var numero = 1;
var resultado = numero === 1 ? "Si soe un 1":"No soe 1";
//en funcion
function esPar(numero){
    return numero % 2 === 0 ? "Es par" : "No es par"
}

var piedra = "Piedra";
var papel = "Papel";
var tijera = "Tijera";

var game = function(user_choice, cpu_choice) {
    if (user_choice === cpu_choice) {
        console.log('Empate con ' + user_choice);
    } else if (user_choice === piedra && cpu_choice === tijera) {
        console.log('Gana Usuario con '+ user_choice);
    } else if (user_choice === papel && cpu_choice === piedra) {
        console.log('Gana Usuario con'+ user_choice);
    } else if (user_choice === tijera && cpu_choice === papel) {
        console.log('Gana Usuario con '+ user_choice);
    } else {
        console.log('Gana CPU con '+ cpu_choice);
    }
}