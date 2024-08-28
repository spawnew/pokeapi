import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Pokemon = () => {

    const [obtener,setObtener]=useState([])
    const[id,setid]=useState(1)
    
 
 
  const sumarid=() =>{
    
    setid(id+1)
  }
  
  const restarid=() =>{   
    if(id>1) 
    setid(id-1)
   }

  
 
    useEffect(() => {
        
        fetch (`https://pokeapi.co/api/v2/pokemon/${id}`)
          .then((res) => res.json()) // Convierte  la respuesta a JSON no olvidar los () para la funcion json()
          .then((data) => {
           
            setObtener([data]); 
            console.log(data)
          })
          .catch((error) => {
            console.error('Error al obtener los datos del Pokémon:', error);
          });
      }, [id]);

  
  
  
  return (
 

    
    obtener.map((poke) => {
      return (
        <div>
<h1>{poke.name}</h1>
<img src={poke.sprites.front_default} alt="" />
<h1>altura={poke.height}</h1>
<ul>
  <p>ATAQUES</p>
  {poke.moves.slice(0,4).map((move,index) =>
  
     <li key={index}>{move.move.name.toUpperCase()}</li>
    )}

</ul>

    <button onClick={restarid}      >-</button>
    <button onClick={sumarid}      >+</button>
       
       
       
       </div>
       
        
       )
        
} )

   
);
};
export default Pokemon;