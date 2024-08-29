import React from 'react'
import { useEffect,useState } from 'react';

export const Pokemon150 = () => {
 
 const [pokemon, setpokemon]=useState([])

 const [list, setlist]=useState("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0")

function incrementar() { 
    setlist({data21 .next})
}
    useEffect(() => {
        
        fetch(`https://pokeapi.co/api/v2/pokemon?${list}`)
          .then((res) => res.json()) // Convierte  la respuesta a JSON no olvidar los () para la funcion json()
          .then((data) => {
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
      }, []);
 
 
 
 
 
    return (
        <div>
            <button onClick={incrementar} ></button>
       {pokemon.map((poke, index) =>( 
       <div key={index}>
            <h1>{poke.name}</h1>
            <img src={poke.sprites.front_default} alt="" />
             
         </div>    
       ))
       }

        </div>
      
            
)};
            
                 
          
      
      
   
  
export default Pokemon150;
