/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Pokemons.css";

function PokemonsList({ pokemons }) {
  const [hover, setHover] = useState(true);

  const renderPokemons = () => {
    return pokemons.map((pokemon) => (
      <li className="poke-card" key={pokemon.name}>
        <img
          onMouseOver={() => setHover(false)}
          onMouseOut={() => setHover(true)}
          src={hover ? pokemon.sprite1 : pokemon.sprite2}
          alt={pokemon.name}
        />
        <h3>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h3>
        <h6>Id: {pokemon.id}</h6>
        <h6>Exp: {pokemon.baseExperience}</h6>
        <h6>Type: {pokemon.type}</h6>
      </li>
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
