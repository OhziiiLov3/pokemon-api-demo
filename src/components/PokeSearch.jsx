import {useState} from 'react';

import '../styles/UserSearch.css'

const PokeSearch = ({onSearchChange}) => {
   const [input, setInput] = useState(''); 

   
   const handleInputChange = (e) => {
    const searchInput = e.target.value
    setInput(searchInput)
    onSearchChange(searchInput);
  };


  return (
    <div className='user-search'>
      <input type="text"
       placeholder='Catch a Pokemon'
       value={input}
       onChange={handleInputChange}
       />
    </div>
  )
}

export default PokeSearch;
