'use strict';
let cadJSON ={"nombres":"JuanAndres"};
// []--> arreglo , {} -->objeto



let datos =[
{
  "nombre":"Juan Andres",
  "apellidos":"Vargas Solano",
  "edad":34,
  "materias":["logica", "programacion","matematicas"],
  "soltero":true

},
{

 "nombre":"Mario Andres",
 "apellidos":"Vargas Solano",
 "edad":19,
 "materias":["logica" , "programacion","matematicas"],
 "soltero":true

}
];

Object.entries(datos).forEach((e)=>console.log(e));

// fetch API para realizar solicitudes y peticiones a un servidor
// sincrono todos en tiempo y espacio ejm reunion teams y asincrono luego una grabacion
