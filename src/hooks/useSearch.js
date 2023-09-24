import { useEffect, useState } from "react";

export function useSearch() {
  const [search, updateSearch] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (search.match(/^\d+$/)) {
      setError("No se pueden hacer búsquedas númericas");
      return;
    }

    if (search.length > 15) {
      setError("La búsqueda no puede superar los 15 caracteres");
      return;
    }

    setError(null);
  }, [search]);

  return { search, updateSearch, error };
}