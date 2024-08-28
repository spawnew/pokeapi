import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Pokemon = () => {

    const [obtener,setObtener]=useState([])
    
 
 

 
    useEffect(() => {
        
        fetch("https://pokeapi.co/api/v2/pokemon/1")
          .then((res) => res.json()) // Convierte  la respuesta a JSON no olvidar los () para la funcion json()
          .then((data) => {
           
            setObtener([data]); 
          })
          .catch((error) => {
            console.error('Error al obtener los datos del Pokémon:', error);
          });
      }, []);

  
  
  
  return (
 
    
    obtener.map((poke) => {
      return ( 
        <div>
<h1>{poke.name}</h1>
       </div>
        
       )
        
} )

   
);
};
export default Pokemon;