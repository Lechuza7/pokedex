export const searchPokemons = async() => {
  
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0");
    const json = await response.json();
    const pokemons = json.Search;

    return pokemons?.map((pokemon) => ({
      name: pokemon.name,
      img: pokemon.url
    })) 
  } catch (e) {
    throw new Error('Error buscando los pokemons')
  }
};