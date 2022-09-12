


async function getPokemon(){
const resp=await axios
.get("https://pokeapi.co/api/v2/pokemon")
.then((response) =>{
console.log(response.data.results);

})
.catch((err) =>{
    console.log(err);
});
return resp;
}
const data =await getPokemon();
console.log("esto es despues de la peticion")