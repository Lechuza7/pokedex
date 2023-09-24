/* eslint-disable react/prop-types */
function PokemonsList({ pokemons }) {
  const renderPokemons = () => {
    return pokemons.map((pokemon) => (
      <li className="pokemon" key={pokemon.name}>
        <h3>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h3>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            pokemon.url.split("/")[6]
          }.png`}
          alt={pokemon.name}
        />
      </li>
    ));
  };

  return <div><ul className="poke-container">{renderPokemons()}</ul></div>;
}

function NoPokemonsResult() {
  return <p>Tu búsqueda no ha generado resultados.</p>;
}

export function Pokemons({ pokemons }) {
  const hasPokemons = pokemons?.length > 0;

  return hasPokemons ? <PokemonsList pokemons={pokemons} /> : <NoPokemonsResult />;
}

