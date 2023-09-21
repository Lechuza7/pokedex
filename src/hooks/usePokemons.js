import { useEffect, useState } from "react";

export function usePokemons() {
  const [pokemons, setPokemons] = useState([]);
  
  useEffect( () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
      .then((response) => response.json())
      .then((data) => {
        const pokemonSortedList = data.results.sort(function (a, b) {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          return 0;
        });
        setPokemons(pokemonSortedList)});
  }, [])

  return pokemons
}