const form =document.getElementById('form');
const btn = document.getElementById('btnDatos');
const names = document.getElementById('inputNames');
const age = document.getElementById('inputAge');
const email = document.getElementById('inputEmail');
const city = document.getElementById('inputCity');
const policy = document.getElementById('checkPolitica');

//comtrol de validacion

const objectValid={
    nombres:false,
     edad: false,
     correo:true,
     ciudad:true,
     politica:false

};

//Validar el formulario


form.addEventListener('submit',(e) => {//submit para refrescar
e.preventDefault();
if (validForm()===-1){
    alert('enviamos el formulario');

}else{
    alert('error en valores del formulario');
}


});

const validForm =() => {
    const values =Object.values(objectValid);
    let response=values.findIndex(e => e===false);
    return response;
};

names.addEventListener('change',(e) => {//e = eventos
    console.log(e.target);
    const namesRegex =/^([a-zA-ZÀ-ÖØ-öø-ÿ]{4,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
    let valorNames=e.target.value;
    //ternario
    objectValid.nombres = valorNames.match(namesRegex);
    console.log(Object.values(objectValid));

});


age.addEventListener('change',function(e){
    const ageRegex =/(^[0-9]{1,2}$)/g;
    if((age.value.match(ageRegex))&&(parseInt(age.value)>=18)){
        objectValid.edad = true;
    }else{
        objectValid.edad =false;
    }
    console.log(Object.values(objectValid));

});

 policy.addEventListener('change',function(e){
 objectValid.politica=e.target.checked===true?true:false;
 console.log(Object.values(objectValid));

});
email.addEventListener('change',function(e){
    const emailRegex =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;
    console.log(e.target);
    objectValid.correo = e.target.value.match(emailRegex);true?true:false;
    console.log(Object.values(objectValid));

});


