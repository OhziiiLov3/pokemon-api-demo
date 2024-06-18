import '../styles/PokemonCard.css';


const PokemonCard = ({ pokemon, onClick }) => {
    const {name} = pokemon
  return (
    <div className="pokemon-card" onClick={onClick}>
      <img src={`https://img.pokemondb.net/artwork/large/${name}.jpg`} alt={name} />
      <h2>{name}</h2>
    </div>
  );
};

export default PokemonCard;
