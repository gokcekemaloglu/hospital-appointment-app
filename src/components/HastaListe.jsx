import React from 'react';
import { FaTimesCircle } from "react-icons/fa";

const HastaListe = ({hastalar, setHastalar, doktorlar }) => {

  
  const deleteHasta = (id) => {
    setHastalar(hastalar.filter((x)=>x.id !== id))
  }

  return (

    <div>
      {hastalar.map((hasta)=>(
        <div key={hasta.id}>
          {doktorlar.map((a)=> a.doctorName === hasta.myDoctor && (
            <div className={hasta.isDone ? "trueStil" : "falseStyle"} 
              onDoubleClick={()=>setHastalar(hastalar.map((a)=>a.id === hasta.id ?  {...a, isDone: !a.isDone} : a))}>

              <div>
                <h2>{hasta.text}</h2> 
                <h4>{hasta.day}</h4>
                <h3>{hasta.myDoctor}</h3>
              </div>
              <div>
                <FaTimesCircle style={{color:"red"}} onClick={()=>deleteHasta(hasta.id)}/>
              </div>

            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default HastaListe