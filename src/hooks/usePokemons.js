import { useCallback, useMemo, useRef, useState } from "react";
import { searchPokemons } from "../services/pokemons";

export function usePokemons({ search, sort }) {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previousSearch = useRef({ search, sort });

  const getPokemons = useCallback(async ({ search }) => {
    if (search === previousSearch.current) return;

    try {
      setLoading(true);
      setError(null);
      previousSearch.current = search;
      const newPokemons = await searchPokemons({ search });
      setPokemons(newPokemons);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const sortedPokemons = useMemo(() => {
    return sort
      ? [...pokemons].sort(function (a, b) {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          return 0;
        })
      : pokemons;
  }, [sort, pokemons]);  

  console.log(pokemons)
  console.log(sortedPokemons)

  return { pokemons, sortedPokemons, loading, getPokemons, error };
}
