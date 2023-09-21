function PokemonsList({ pokemons }) {
  return (
    <ul>
      {pokemons.map((pokemon) => (
        <li className="pokemon" key={pokemon.name}>
          <h3>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h3>
          <img src={pokemon.url} alt={pokemon.name} />
        </li>
      ))}
    </ul>
  );
}

function NoPokemonsResult() {
  return <p>Tu búsqueda no ha generado resultados.</p>
}

export function Pokemons({ pokemons }) {
  const hasPokemons = pokemons?.length > 0;

  return hasPokemons ? <PokemonsList /> : <NoPokemonsResult />
}
