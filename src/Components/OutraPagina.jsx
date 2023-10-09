import React, { useEffect, useState } from 'react'
import  './OutraPagina.css'
import { getAllDigimon } from '../services/api'


const OutraPagina = () => {

const [digimon,setDigimon] = useState ([])

async function getdigimon() {
    const res=await getAllDigimon ()
    setDigimon (res)
}

useEffect(() => {
    getdigimon();
}, []);

  return (
    <>
    <div className='Principal'><h1>Digimon</h1>
    <div className="digimonContainer">
      {digimon.map(digi => (  <div className="digimonBox">
            <img src={digi.img} alt="" className="digimonImg" />
            <h2 className="digimonName">{digi.name}</h2>
        </div>))}
        
    </div>
    </div>
    </>
  )
}

export default OutraPagina
