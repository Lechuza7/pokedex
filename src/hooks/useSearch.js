import { useEffect, useState } from "react";

export function useSearch() {
  const [search, updateSearch] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (search.match(/^\d+$/)) {
      setError("No se pueden hacer búsquedas númericas");
      return;
    }

    setError(null);
  }, [search]);

  return { search, updateSearch, error };
}