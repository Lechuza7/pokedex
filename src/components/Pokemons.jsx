/* eslint-disable react/prop-types */

import Pokemon from './Pokemon.jsx';
import "./Pokemons.css";

function PokemonsList({ pokemons }) {
  

  const renderPokemons = () => {
    return pokemons.map((pokemon) => (
      <Pokemon key={pokemon.name} pokemon={pokemon}/>
    ));
  };

  return (
    <div>
      <ul className="poke-container">{renderPokemons()}</ul>
    </div>
  );
}

function NoPokemonsResult() {
  return <p>Tu búsqueda no ha generado resultados.</p>;
}

export function Pokemons({ pokemons }) {
  const hasPokemons = pokemons?.length > 0;

  return hasPokemons ? (
    <PokemonsList pokemons={pokemons} />
  ) : (
    <NoPokemonsResult />
  );
}
