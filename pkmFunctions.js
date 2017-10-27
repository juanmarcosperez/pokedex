
 function searchPokedex(){
   var pokemon_data = document.getElementById('pkName');
var pokemon_name = pokemon_data.value;
document.getElementById("pkName").value="";

fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon_name, {
    mode: 'cors',
    method: 'GET',
  })
.then(function(response) {
  if(response.status !== 200){
    console.log('Looks like there was a problem. Status Code: ' + response.status);
    return;
}
  //Examine the text in the response
  response.json().then(function(data){
    console.log(data);

    $('#pokemonDisplay').empty();
    $('#pokemonDisplay').append('<p> Pokemon Name: '+data.name +'</p>');
    $('#pokemonDisplay').append('<p> Pokemon Attack: ' + data.stats[4].base_stat + '</p>');
    $('#pokemonDisplay').append('<p> Pokemon Defense: ' + data.stats[3].base_stat + '</p>');
    $('#pokemonDisplay').append('<p> Pokemon Special attack: ' + data.stats[2].base_stat + '</p>');
    $('#pokemonDisplay').append('<p> Pokemon Special Defense: ' + data.stats[1].base_stat + '</p>');
    $('#pokemonDisplay').append('<p> Pokemon Speed: ' + data.stats[0].base_stat + '</p>');
    $('#pokemonDisplay').append('<p> HP: ' + data.stats[5].base_stat + '</p>');
    $('#pokemonDisplay').append('<p> Weight(in Kg): ' + data.weight + '</p>');
    $('#pokemonDisplay').append('<p> Height(in M): ' + data.height + '</p>');
    $('#pokemonDisplay').append('<img src =" ' + data.sprites.front_default + ' " </img>');
    $('#pokemonDisplay').append('<img src =" '+ data.sprites.back_default+ ' " </img>');
});
}
)

};
