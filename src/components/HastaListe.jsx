import React from 'react'
import { MdDeleteForever } from 'react-icons/md'

const HastaListe = ({veri,setVeri}) => {

    const deleteHasta = (id) => {
        setVeri(veri.filter((osmancik)=>osmancik.id !== id))
    }


  return (
    <div className="hastalistesi">
        
        {veri.map((osman)=>(
            <div key={osman.id} className={osman.bittiMi ? "bitti" : "devam"} onDoubleClick={()=>setVeri(veri.map((x)=>x.id === osman.id ? {...x, bittiMi: !osman.bittiMi} : x))}>
                <h3>
                    {osman.text}
                    <MdDeleteForever style={{color:"red", fontSize:"25px"}} onClick={()=>deleteHasta(osman.id)}/>
                </h3>
                <h6>{osman.day}</h6>
                <h4>{osman.doktor}</h4>
                
            </div>
        ))}
    </div>
  )
}

export default HastaListe