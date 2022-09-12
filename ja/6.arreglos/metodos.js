'use strict';
let cadena = "enero-febrero-marzo-abril-mayo-junio-julio";
//metodo split
const myArray1=[2,4,6,8,true,3.56,'Maria',800,'2'];
let resultArray =cadena.split("-");
//console.log(resultArray);
//metodo find indice o posicion del elemento buscado
let result = myArray1.find((e)=>e ===4 );// === tipo de datos
//console.log(result);
//metodo find index   Busca pero devuelve el indice del elemento

result=myArray1.findIndex((e)=>e ==='Maria');// === tipo de datos)
//metodo filter
result=myArray1.findIndex((e)=>e%2==0);


console.log(result);