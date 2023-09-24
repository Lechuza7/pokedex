
export const searchPokemons = async({ search }) => {
  
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0");
    const json = await response.json();
    const pokemons = json.results;
    
    const allPokemons = pokemons?.map((pokemon) => ({
      name: pokemon.name,
      url: pokemon.url
    })) 

    const searchedPokemons = allPokemons.filter((pokemon) => pokemon.name.includes(search))
    
    return searchedPokemons ? searchedPokemons : allPokemons
  } catch (e) {
    throw new Error('Error buscando pokemons')
  }
};

