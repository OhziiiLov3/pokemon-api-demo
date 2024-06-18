import { useState, useEffect } from "react";
import axios from "axios";

import "../styles/PokemonList.css";
import PokeSearch from "./PokeSearch";
import PokemonCard from "./PokemonCard";
import PokemonModal from "./PokemonModal";

const PokemonList = () => {
  const [pokemons, setPokemon] = useState([]);
  const [onSearch, setSearch] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const res = await axios.get(
          `https://pokeapi.co/api/v2/pokemon?limit=50`
        );
        const pokemonData = res.data.results;
        setPokemon(pokemonData);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchPokemon();
  }, []);



  const handleSearchChange = (term) => {
    setSearch(term);
  };

//   display pokemon details on Modal
const handleCardClick = async (pokemon) => {
 try {
    const res = await axios.get(pokemon.url);
    console.log(res.data);
    setSelectedPokemon(res.data);
    setModalOpen(true);
 } catch (error) {
    console.log("Error Fetching data:", error);
 }
}

// close modal on click 

const closeModal = () =>{
    setModalOpen(false);
    setSelectedPokemon(null);
}

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(onSearch.toLowerCase())
  );

  return (
    <>
      <PokeSearch onSearchChange={handleSearchChange} />
      <div className="pokemon-list">
        {filteredPokemons.map((pokemon, idx) => (
          <PokemonCard pokemon={pokemon} key={idx} onClick={()=> handleCardClick(pokemon)}/>
        ))}
      </div>
   {isModalOpen && selectedPokemon && (
    <PokemonModal pokemon={selectedPokemon} onClose={closeModal}/>
   )}
    </>
  );
};

export default PokemonList;
