import React from 'react'
import { useEffect,useState } from 'react';



export const Pokemon150 = () => {
 
 const [pokemon, setpokemon]=useState([])

 const [list, setlist]=useState("https://pokeapi.co/api/v2/pokemon?limit=14&offset=0")
 
const [next,setnext]=useState("")
const [previous,setprevious]=useState("")
const [todo,settodo]=useState("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
const [selectedPokemon, setSelectedPokemon] = useState(null);
function incrementar() { 
    setlist(next)
}
function decrementar() { 
    setlist(previous)
}
function mostrarTodos() { 
    setlist(todo)
}

const handleCardClick = (poke) => {
    setSelectedPokemon(poke); 
  };

    useEffect(() => {
        
        fetch(list)
          .then((res) => res.json()) // Convierte  la respuesta a JSON no olvidar los () para la funcion json()
          .then((data) => {
            setnext(data.next)
            setprevious(data.previous)
            const fetchPokemonDetails = data.results.map((pokemon) =>
          fetch(pokemon.url).then((res) => res.json())
          
        );

        
        Promise.all(fetchPokemonDetails).then((pokemonDetails) => {
          setpokemon(pokemonDetails);
        });
      })
            .catch((error) => {
                console.error('Error al obtener los datos del Pokémon:', error);
              });
      }, [list]);
 
 
  
    
 
    return (

    
        <div className="pokemon">
                     <div className='buton'>
         <button onClick={incrementar}><p>Proximos</p></button>
     <button onClick={decrementar} ><p>Anteriores</p></button>
     <button onClick={mostrarTodos} ><p>Todos</p></button>
     
   

     
     </div>
            {selectedPokemon && (
        <div className="card">
          <h2>{selectedPokemon.name}</h2>
          <img src={selectedPokemon.sprites.front_default} alt={selectedPokemon.name} />
          <p><strong>Altura:</strong> {selectedPokemon.height}</p>
          <p><strong>Peso:</strong> {selectedPokemon.weight}</p>
          <p><strong>Ataques:</strong> {selectedPokemon.abilities.map(ability => ability.ability.name).join(', ')}</p>
         
        </div>
      )}
            

     
       {pokemon.map((poke, index) =>( 
       
       <div className='card' key={index} onClick={() => handleCardClick(poke)}>
            <img src={poke.sprites.front_default} alt="" />
            <h3><strong>{poke.name}</strong></h3>
            
         </div>
             ))}
                 
    
    </div>
  );
}
   
  
export default Pokemon150;
