import '../styles/PokemonModal.css'

const PokemonModal = ({ pokemon, onClose }) => {
  const { name, sprites, abilities, types } = pokemon;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <img src={sprites.front_default} alt={name} />
        <h2>{name}</h2>
        <h3>Abilities</h3>
        <ul>
          {abilities.map((ability, idx) => (
            <li key={idx}>{ability.ability.name}</li>
          ))}
        </ul>
        <h3>Types</h3>
        <ul>
            {types.map((type,idx)=>(
             <li key={idx}>{type.type.name}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default PokemonModal;
