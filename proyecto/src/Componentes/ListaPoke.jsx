import React from 'react'
import { useEffect } from 'react'
import {useState} from 'react'
import data from './data/poke.json'

const ListaPoke = () => {

const [poke,setPoke]=useState([])


const obtenerPoke= () => {
  return new Promise ((resolve,reject)=>{
  resolve(data)
})
}

useEffect(() => { 
obtenerPoke()
          .then((res) =>{
            setPoke(res);
          })

        },[]);
  return (
    poke.map((poke) =>{
      return<div>
     
      <h1>{poke.id}</h1>
      <p>{poke.first_name}</p>
      <p>{poke.email}</p>
     
     <img src ={poke.ip_address} alt="" />
 
        {poke.ip_address}
     </div>
    }) 
      
    
   
  )
}

export default ListaPoke;