var numero = 1
switch (numero) {
    case 1:
        console.log("Soe uno");
        break;
    case 10:
        console.log("soe un dies");
        break;
    default:
        console.log("no soe nada :(")
}

function semaforo(color) {
    switch (color) {
      case "verde": {
        console.log("¡Sigue!")
        break
      }
      case "amarillo": {
        console.log("¡Detente!")
        break
      }
      case "rojo": {
        console.log("¡No puedes avanzar!")
        break
      }
      default: {
        console.log("¡No reconozco ese color! :(")
      }
    }
  }
  semaforo("verde") //'¡Sigue!'

  //
var piedra = "Piedra";
var papel = "Papel";
var tijera = "Tijera";

function ppt_switch (user_choice, cpu_choice) {

    switch (true) {
        case (user_choice === cpu_choice):
            console.log("Emñpate");
            break;
        case (user_choice === 'piedra' && cpu_choice === 'tijera'):
            console.log("Gana iuser con " + user_choice);
            break;
        case (user_choice === 'papel' && cpu_choice === 'piedra'):
            console.log("Gana iuser con " + user_choice);
            break;
        case (user_choice === 'tijera' && cpu_choice === 'papel'):
            console.log("Gana iuser con " + user_choice);
            break;
        default:
            console.log('Gana cpu con '+ cpu_choice);
    }
};