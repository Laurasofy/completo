'use strict'

//funcion  clásica
function printinCad(cadena="No paso parámetro"){
 //templato string  comillas invertidas 
 //parametros que desee
console.log(`Esto es una prueba de cadena ${cadena}`);

}
//Invocación
printinCad("Estoy pasando parámetro");

//funcion tipo flecha retornar 
//math operaciones matematicas

const operación=(num1,num2)=>{
    let result =Math.pow(num1,num2);
    return result; 

}

console.log (operación(5,3));