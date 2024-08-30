import React from 'react'
import { useEffect,useState } from 'react';



export const Pokemon150 = () => {
 
 const [pokemon, setpokemon]=useState([])

 const [list, setlist]=useState("https://pokeapi.co/api/v2/pokemon?limit=14&offset=0")
 
const [next,setnext]=useState("")
const [previous,setprevious]=useState("")
const [todo,settodo]=useState("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
function incrementar() { 
    setlist(next)
}
function decrementar() { 
    setlist(previous)
}
function mostrarTodos() { 
    setlist(todo)
}



    useEffect(() => {
        
        fetch(list)
          .then((res) => res.json()) // Convierte  la respuesta a JSON no olvidar los () para la funcion json()
          .then((data) => {
            setnext(data.next)
            setprevious(data.previous)
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
            
         <div className='buton'>
         <button onClick={incrementar}><p>Proximos</p></button>
     <button onClick={decrementar} ><p>Anteriores</p></button>
     <button onClick={mostrarTodos} ><p>Todos</p></button>
     
   

     
     </div>
     
      

       
       {pokemon.map((poke, index) =>( 
       
       <div className='card' key={index}>
            <img src={poke.sprites.front_default} alt="" />
            <h3>{poke.name}</h3>
            
         </div>    
       ))
       }
     
    
                   
       </div>   
    )};
        
      
   
  
export default Pokemon150;
