

import './App.css'

import PokemonList from './components/PokemonList';


function App() {

  return (
    <div className='app'>
    <h1>Catch that Pokemon!</h1>
    <div className="pokemon-list"></div>
    <PokemonList />
    
    </div>
  )
}

export default App
