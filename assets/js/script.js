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
function getPokemonData(pokemonName) {
  const url = `https://pokedexapi.co/api/v1/pokemon/${pokemonName}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Manipule os dados recebidos como desejar
      namePokemon.innerHTML = 'Loading...';
      console.log(data);

      // Exemplo: exiba o nome do Pokémon
      console.log(data.name);

      // Exemplo: exiba a URL da imagem do Pokémon
      console.log(data.sprites.front_default);
    })
    .catch(error => {
      console.log('Ocorreu um erro:', error);
    });
}

// Chamando a função com o nome do Pokémon desejado (por exemplo, Pikachu)
getPokemonData('pikachu');