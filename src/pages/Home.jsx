import React, { useState } from 'react'
import HastaEkle from '../components/HastaEkle'
import HastaListe from '../components/HastaListe'
import data from "../helper/data"
import { doctorData } from '../helper/data'



const Home = () => {

    const [veri,setVeri] = useState(data)
    const [doctorResim,setDoctorResim] = useState(doctorData)

    console.log(doctorResim);

  return (
    <div className="container">
        <HastaEkle veri={veri} doctorResim={doctorResim} setDoctorResim={setDoctorResim} setVeri={setVeri} />
        <HastaListe veri={veri} setVeri={setVeri} />
    </div>
  )
}

export default Home