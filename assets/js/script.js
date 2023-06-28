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
const form = document.querySelector('.form-bar');
const inputSearch = document.querySelector('.input-search');
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

let searchPokemon = 1;

async function fetchPokemon (pokemon){
  const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  
  if(APIResponse.status === 200){
    const data = await APIResponse.json();
  
    return data;
  }
}

async function renderPokemon(pokemon){

  pokemonName.innerHTML = 'Loading...';
  pokemonNumber.innerHTML = '';

  const data = await fetchPokemon(pokemon);

  if(data){
    pokemonImage.style.display = ('block');
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    searchPokemon = data.id;
  } else{
    pokemonImage.style.display = ('none');
    pokemonName.innerHTML = 'Not Found';
    pokemonNumber.innerHTML = '';
  }
  
}

form.addEventListener('submit', (event) =>{
  event.preventDefault();

  renderPokemon(inputSearch.value.toLowerCase());
  inputSearch.value = '';
});

buttonPrev.addEventListener('click', () =>{
  if(searchPokemon > 1){
    searchPokemon -= 1;
    renderPokemon(searchPokemon);
  }
  
});

buttonNext.addEventListener('click', () =>{
  searchPokemon += 1;
  renderPokemon(searchPokemon);
});

renderPokemon(searchPokemon);