let namePokemon = document.querySelector('.desc-card');

//Evento para deixar a barra de pesquisa transparent ao clicar na barra
document.getElementById('searchBar').addEventListener('focus', function() {
    this.placeholder = '';
  });
  
  document.getElementById('searchBar').addEventListener('blur', function() {
    this.placeholder = 'Pesquise aqui seu Pokemon pelo nome ou número';
  });

// ------------------------------------------------------------------------

// Função para obter informações e imagens de um Pokémon

const pokemonName = document.querySelector('.pokemon-name');
const pokemonNumber = document.querySelector('.pokemon-number');
const pokemonImage = document.querySelector('.img-pokemon');

async function fetchPokemon (pokemon){
  const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  
  const data = await APIResponse.json();

  return data;
}

async function renderPokemon(pokemon){
  const data = await fetchPokemon(pokemon);

  pokemonName.innerHTML = data.name;
  pokemonNumber.innerHTML = data.id;
  pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
}

renderPokemon(9);