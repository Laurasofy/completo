'use strict';
/**Declaracion de arreglos */
const myArray1=[2,4,6,8,true,3.56,'Maria',800,'2'];
let myArray2 =new Array('a', 'e', 'i', 'o','u');//new objetos
console.log(myArray1[6]);
console.log(myArray2[3]);

/**Iteracion de arreglos
 * for in , for of , foreach
 * 
 * 
 */
for (i of myArray1) {
//console.log(i);

}
for (let j in myArray1) {//declarar contenedores
//console.log(myArray1[j]);

}
for (let k=0; k<myArray1.length; k++) {//length tamaño del arreglo
    //console.log(myArray1[k]);
}
myArray2.forEach(e=>{

    console.log(e);
});