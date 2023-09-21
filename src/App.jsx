import './App.css'
import { usePokemons } from './hooks/usePokemons';
import { Pokemons } from "./components/Pokemons.jsx"

function App() {
  const [pokemons] = usePokemons

  return (
    <div>
      <Pokemons pokemons={pokemons} />
    </div>
  )
}

export default App
