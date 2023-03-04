var frutas = ['manzana', 'platano', 'cereza', 'fresa'];
console.log(frutas);
console.log(frutas.length); //lenght of array
console.log(frutas[2]); //slice of array

frutas.push("uvas"); //method to add element at the end of array
frutas.pop(); //method to drop last element of array
frutas.unshift("piña"); //method to add element at the beginning of array
frutas.shift(); //method to drop element at the beginning of array
frutas.indexOf('cereza') //method to find index of element in array

function solution(array_sectreto) {
    return (typeof array_sectreto[0] === "string");
};