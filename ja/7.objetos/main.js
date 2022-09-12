'use strict'
// objeto literal de JS
// instanciar objecto crear/clase =plantilla /Propiedades caracteristicas
//metodos =Atributos
// class Medicina{ nombre,presentacion y dosis(caracteristicas)}
//tomar =Atributos
//propiedades ingresamos por medio del punto
// 4 pilares  polimorfismos =muchas formas Herencia Encapsulacion(proteger informacion/modificadores de absceso) y abstraccion(UML) 
//modificadores de absceso publico,privado y proteger
// polimorfismos = muchas formas y solo un metodo
//uml(diagramas) =Clases /objeto (estructura)


//objetos instancia

let myObject={
    nombre:'Felix',
    apellidos:'Ruiz',
    edad: 18,
    genero:'masculino'

}
console.log(myObject.apellidos);
myObject.apellidos="sosa";
console.log(myObject);

//iterar objeto

Object.entries(myObject).forEach((e)=>console.log(e));                                            
Object.entries(myObject).forEach((key,value)=>console.log(key,value));
Object.keys(myObject).forEach((key)=>console.log(key));

