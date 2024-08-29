import React from 'react'
import { useEffect,useState } from 'react';

export const Pokemon150 = () => {
 
 const [pokemon, setpokemon]=useState([])

 const [list, setlist]=useState("https://pokeapi.co/api/v2/pokemon?limit=30&offset=0")
const [next,setnext]=useState("")
function incrementar() { 
    setlist(next)
}
    useEffect(() => {
        
        fetch(list)
          .then((res) => res.json()) // Convierte  la respuesta a JSON no olvidar los () para la funcion json()
          .then((data) => {
            setnext(data.next)
            const fetchPokemonDetails = data.results.map((pokemon) =>
          fetch(pokemon.url).then((res) => res.json())
          
        );

        // Esperamos a que todas las solicitudes se completen
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
       
       {pokemon.map((poke, index) =>( 
       <div className='card' key={index}>
            <img src={poke.sprites.front_default} alt="" />
            <h3>{poke.name}</h3>
         </div>    
       ))
       }
     <button onClick={incrementar} >Proximos</button>
        </div>
      
            
)};
            
                 
          
      
      
   
  
export default Pokemon150;
