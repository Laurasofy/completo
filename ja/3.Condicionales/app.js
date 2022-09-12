'use strict';
let num3='12';
let num4=12;
if (num3>num4){
    console.log("entre");
}else{

    if(num3 % 5===0){
        console.log("multiplo de 5");

    }
}

//Condicional ternario
//? si

let respuesta = (num4 >=10)?"num4 es ,ayor que 10":"no es mayor que 10"
console.log(respuesta);

//switch es un operador de seleciion

let opcion =4;
switch (opcion){
  case 1:
    console.log("opcion 1");
      break;
    case 2:
     console.log("opcion2");
        break;
    case 3:
     console.log("opcion 3");
      break;

    case 4:
     console.log("opcion 4");
     break;
     default:
        console.log("opcion fuera de rango");

}
switch (true){
    case opcion >= 0 && opcion <=3:
      console.log("Esta aplazado");
        break;
      case  opcion >= 0 && opcion <=5:
       console.log("Esta aprovado");
          break;
      case opcion >5:
       console.log("opcion fuera de rango");
        break;
  
  
  }

