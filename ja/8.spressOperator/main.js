'use strict';
/**SO... Operador de propagacion */
 let myArray1=[2,4,6,8,true,3.56,'Maria',800,'2'];
let myArray2 =new Array('a', 'e', 'i', 'o','u');//new objetos


myArray1.push(300,667);
//let result = myArray1.concat(myArray2);
let result = [...myArray1,...myArray2,78,827772];

console.log(...result);

for (i of myArray1) {
    //console.log(i);
    
    }
    for (let j in myArray1) {//declarar contenedores
    //console.log(myArray1[j]);

    }
    function print(parm1,parm2=0,parm3=0){
        console.log(`esto es una impresion de los parametros: ${parm1}${parm2}${parm3}`);
    }

    print(...myArray1);