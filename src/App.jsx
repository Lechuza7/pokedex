import { useState } from "react";
import "./App.css";
import { usePokemons } from "./hooks/usePokemons";
import { useSearch } from "./hooks/useSearch";
import { Pokemons } from "./components/Pokemons.jsx";

function App() {
  const [sort, setSort] = useState(false);
  const { search, updateSearch, error } = useSearch();
  const { pokemons, loading, getPokemons } = usePokemons({ search, sort });

  const handleSubmit = (event) => {
    event.preventDefault();
    getPokemons({ search });
  };

  const handleSort = () => {
    setSort(!sort);
  };

  const handleChange = (event) => {
    const newSearch = event.target.value;
    updateSearch(newSearch);
  };

  return (
    <div>
      <header>
        <h1>Buscador de pokemons</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            style={{
              border: "1px solid transparent",
              borderColor: error ? "red" : "transparent",
            }}
            onChange={handleChange}
            value={search}
            name="search"
            placeholder="Ditto, Farfetch'd, Articuno..."
          />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>

      <main>{loading? <p>Cargando...</p> : <Pokemons pokemons={pokemons} />}</main>
    </div>
  );
}

export default App;
