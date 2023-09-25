export const searchPokemons = async ({ search }) => {
  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0"
    );
    const json = await response.json();
    const pokemons = json.results;

    const allPokemons = await Promise.all(
      pokemons.map(async (pokemon) => {
        const pokemonResponse = await fetch(pokemon.url);
        const pokemonData = await pokemonResponse.json();

        return {
          name: pokemonData.name,
          url: pokemon.url,
          sprite1: pokemonData.sprites.front_default,
          sprite2: pokemonData.sprites.back_default,
          baseExperience: pokemonData.base_experience,
          id: pokemonData.id,
          height: pokemonData.height
        };
      })
    );

    const searchedPokemons = allPokemons.filter((pokemon) =>
      pokemon.name.includes(search)
    );

    return searchedPokemons.length > 0 ? searchedPokemons : allPokemons;
  } catch (e) {
    throw new Error("Error buscando pokemons");
  }
};
